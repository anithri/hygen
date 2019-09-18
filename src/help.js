// @flow

import type { Logger } from './types'

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const pkg = require('../package.json')

const baseUsage = `
Usage:
  hygen [option] GENERATOR ACTION [--name NAME] [data-options]

Options:
  -h, --help # Show this message and quit
  --dry      # Perform a dry run.  Files will be generated but not saved.
  
  --logLevel LEVEL # [trace: 0, debug: 1, info: 2, warn: 3, error, 4, silent: 5]
  -s, --silent     # set logLevel = 5
  -q, --quiet      # set logLevel = 4
  -w, --warn       # set logLevel = 3
  --info, --ok     # set logLevel = 2
  -d, --debug      # set logLevel = 1, setting process.env.DEBUG will as well
  --trace          # set logLevel = 0
`

const earlyHelp = ({config, params}) => {
  if (['-h', '--help'].includes(config.argv[0])) {
    logger.info(baseUsage)
    process.exit(0)
  }

  args.dry && logger.warn('(dry mode)')
  if (!generator) {
    throw new Error('please specify a generator.')
  }

  if (!action) {
    throw new Error(`please specify an action for ${generator}.`)
  }

  logger.log(`Loaded templates: ${templates.replace(cwd + '/', '')}`)
  if (!(await fs.exists(actionfolder))) {
    throw new Error(`I can't find action '${action}' for generator '${generator}'.

      You can try:
      1. 'hygen init self' to initialize your project, and
      2. 'hygen generator new --name ${generator}' to build the generator you wanted.

      Check out the quickstart for more: http://www.hygen.io/quick-start
      `)
  }

}

const availableActions = (templates: string) => {
  const generators = fs.readdirSync(templates).filter(_ =>
    fs.lstatSync(path.join(templates, _)).isDirectory()
  )
  return generators.reduce((acc, generator) => {
    const actions = fs.readdirSync(path.join(templates, generator))
    acc[generator] = actions
    return acc
  }, {})
}

const printHelp = (templates: string, logger: Logger) => {
  logger.log(`Hygen v${pkg.version}`)
  logger.log('\nAvailable actions:')
  if (!templates) {
    logger.log(
      `No generators or actions found. 

      This means I didn't find a _templates folder right here, 
      or anywhere up the folder tree starting here.

      Here's how to start using Hygen:

      $ hygen init self
      $ hygen with-prompt new --name my-generator

      (edit your generator in _templates/my-generator)

      $ hygen my-generator 

      See http://hygen.io for more.
      
      `,
    )
    return
  }
  Object.entries(availableActions(templates)).forEach(([k, v]) => {
    logger.log(chalk.bold(k) + ': ' + v.join(', '))
  })
}

module.exports = { availableActions, printHelp }
