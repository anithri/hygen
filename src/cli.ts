#!/usr/bin/env node
import { CommandModule } from 'yargs/yargs'
import walk from 'ignore-walk'
import { Argv } from 'yargs'

const defaultCommand: CommandModule = {
  command: '$0',
  aliases: [],
  describe: false,
  builder: yargs => yargs,
  handler: yargv => {

  },
}

export const hygenYargs = (argv: Array<string>): object => {
  return (require('yargs/yargs'))(argv)
    .scriptName('hygen')
    .usage('$0 [global-args] GENERATOR ACTION [NAME] [param-args]')
    .version(false)
    .help('help','Show Help')
    .alias('help','h')
    .option('dry', { describe: 'Run all steps but do not generate files' })
    // .command(defaultCommand)
    .command('<generator> <action> [name]',
      'generate the templates for generator action',
      (yargs) => {
        yargs.positional('generator', {
          describe: 'generator (_templates/myGenerator)',
          type: 'string',
        } ).positional('proxy', {
          describe: 'optional proxy URL',
          type: 'string',
        })
      },
      yargv => {console.log('generator action', yargv); return yargv})
    .argv
}

console.log(hygenYargs(process.argv.slice(2)))

const walk = require('ignore-walk')
export const availableActions = async () =>
  await walk({path: '_templates'})
  .then(files => files.reduce(
    (actions, file) => {
      const [generator, action] = file.split('/')
      actions[generator] = actions[generator] || {}
      actions[generator][action] = true
      return actions
    },
    {}
  ))
    .then(f => {console.log('actions', f); return f})
    .then(generators =>
      Object.entries(generators).map(([generator, actions]) =>
      `${generator}: ${Object.keys(actions).sort().join(', ')}`
      )
    )
    .then(f => {console.log('generators', f); return f})


console.log(availableActions())
