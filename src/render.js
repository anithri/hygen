// @flow

import type { RenderedAction, RunnerConfig } from './types'

const fs = require('fs-extra')
const ejs = require('ejs')
const fm = require('front-matter')
const path = require('path')
const context = require('./context')
const { resolve } = require('path')

// for some reason lodash/fp takes 90ms to load.
// inline what we use here with the regular lodash.
const map = f => arr => arr.map(f)
const filter = f => arr => arr.filter(f)

const ignores = ['prompt.js', 'index.js']
const renderTemplate = (tmpl, locals, config) =>
  typeof tmpl === 'string' ? ejs.render(tmpl, context(locals, config)) : tmpl

async function getFiles(dir) {
  const subdirs = await fs.readdir(dir)
  const files = await Promise.all(
    subdirs.map(async subdir => {
      const res = resolve(dir, subdir)
      return (await fs.stat(res)).isDirectory() ? getFiles(res) : res
    }),
  )
  return Array.prototype.concat(...files)
}

/* wow,
  this would need to be refactored into a different form
  for ignoring generator actions files
*/
const render = async (
  args: any,
  config: RunnerConfig,
): Promise<Array<RenderedAction>> =>
  await getFiles(args.actionfolder)
    .then(things => things.sort((a, b) => a.localeCompare(b))) // TODO: add a test to verify this sort
    .then(filter(f => !ignores.find(ig => f.endsWith(ig)))) // TODO: add a
    // test for ignoring prompt.js and index.js
    .then(filter(file => (args.subaction ? file.match(args.subaction) : true)))
    .then(
      map(file =>
        fs.readFile(file).then(text => ({ file, text: text.toString() })),
      ),
    )
    .then(_ => Promise.all(_))
    .then(map(({ file, text }) => Object.assign({ file }, fm(text))))
    .then(
      map(({ file, attributes, body }) => ({
        file,
        attributes: Object.entries(attributes).reduce(
          (obj, [key, value]) =>
            (obj[key] = renderTemplate(value, args, config)) && obj,
          {},
        ),
        body: renderTemplate(body, args, config),
      })),
    )

module.exports = render
