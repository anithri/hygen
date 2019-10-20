import {
  ArrayFilterCallback,
  ArrayMapCallback,
  RenderedAction,
  RunnerConfig,
} from 'hygen'

const fs = require('fs-extra')
const ejs = require('ejs')
const fm = require('front-matter')
const path = require('path')
const { resolve } = require('path')
const walk = require('ignore-walk')
const context = require('./context')

// for some reason lodash/fp takes 90ms to load.
// inline what we use here with the regular lodash.
const map = (f: ArrayMapCallback) => (arr: Array<any>): Array<any> => arr.map(f)
const filter = (f: ArrayFilterCallback) => (arr: Array<any>): Array<any> => arr.filter(f)

// default ignored files
const ignores = [
  'prompt.js',
  'index.js',
  '.hygenignore',
  '.DS_Store',
  '.Spotlight-V100',
  '.Trashes',
  'ehthumbs.db',
  'Thumbs.db',
]
const renderTemplate = (tmpl: string | any, locals: object, config: object): string | any =>
  typeof tmpl === 'string' ? ejs.render(tmpl, context(locals, config)) : tmpl

async function getFiles(dir: string): Promise<Array<string>> {
  const files = walk
    .sync({ path: dir, ignoreFiles: ['.hygenignore'] })
    .map((f: string): string => path.join(dir, f))
  return files
}

const render = async (
  args: any,
  config: RunnerConfig,
): Promise<Array<RenderedAction>> =>
  await getFiles(args.actionfolder)
    // TODO: add a test to verify this sort
    .then((things: Array<string>): Array<string> => things.sort((a, b) => a.localeCompare(b)))
    // TODO: add a test for ignoring prompt.js and index.js
    .then(filter(f => !ignores.find(ig => f.endsWith(ig))))
    .then(filter(file => (args.subaction ? file.match(args.subaction) : true)))
    .then(
      map(file =>
        fs.readFile(file).then((text: string) => ({ file, text: text.toString() })),
      ),
    )
    .then(_ => Promise.all(_))
    .then(map(({ file, text }) => Object.assign({ file }, fm(text))))
    .then(
      map(({ file, attributes, body }) => ({
        file,
        attributes: Object.entries(attributes).reduce(
          (obj: {[s: string]: any}, [key, value]: [string,any]) =>
            (obj[key] = renderTemplate(value, args, config)) && obj,
          {},
        ),
        body: renderTemplate(body, args, config),
      })),
    )

module.exports = render