#!/usr/bin/env node
// import { CommandModule } from 'yargs/yargs'
// import walk from 'ignore-walk'
import { Argv } from 'yargs'
import Logger from './logger'

const walk = require('ignore-walk')

export const availableActions = async () =>
  await walk({ path: '_templates' })
    .then(files => files.reduce(
      (actions: { [s: string]: Set<string> }, file) => {
        const [generator, action] = file.split('/')
        actions[generator] = actions[generator] || new Set([])
        actions[generator].add(action)
        return actions
      },
      {},
    ))
    .then((generators) =>
      Object.entries(generators).reduce((final, [key, entries]) => {
        final[key] = Array.from(entries as Set<string>)
        return final
      }, {}),
    )
// .then(f => {console.log('actions', f); return f})
// .then(generators =>
//   Object.entries(generators).map(([generator, actions]: [string, Array<string>]) =>
//     `${generator}: ${actions.sort().join(', ')}`,
//   ),
// )
// .then(f => {
//   logger.notice('generators:')
//   logger.notice(f)
//   return f
// })

export const hygenYargs = async (argv: Array<string>, logger) => {

  const actions = await availableActions()

  let yargs = require('yargs/yargs')(argv)
    .scriptName('hygen')
    .version(false)
    .help('help', 'Show Help')
    .alias('help', 'h')
    .option('dry', {
      describe: 'Run all steps but do not generate files',
    })
    .command(
      '$0 <generator> <action> [name]',
      'generate the templates for generator action',
      (yrg: Argv): Argv =>
        yrg
          .positional('generator', {
            describe: 'generator (_templates/myGenerator)',
            type: 'string',
          })
          .positional('action', {
            describe: 'action (_templates/myGenerator/myAction)',
            type: 'string',
          })
          .positional('name', {
            describe: 'name for the generated templates',
            type: 'string',
          }),
      // @ts-ignore

      (yargv) => {
        if (yargv.generator && yargv.action) {
          logger.notice(`Generator: ${yargv.generator}`)
          logger.notice(`   Action: ${yargv.action}`)
          // Start rendering the templates
          // generateActionCommands
        } else if (yargv.generator) {
          logger.err(`No Action for generator: ${yargv.generator}`)
          return false
        } else {
          logger.err('No Generator')
          return false
        }
        logger.notice('yargs.argv', yargv)
        return yargv
      },
    )
  return generateActionCommands(yargs, actions)
    .demandCommand(2)
    // @ts-ignore
    .fail((msg, err, ygs) => {
      // logger.err('Yargs msg,error:', msg, err)
      logger.warn(msg)
      ygs.showHelp()
      logger.notice('===> actionsAvailable <===')
    }).argv
}
const generateActionCommands = (yargs: Argv, actions: { [s: string]: Array<string> }): Argv => {
  Object.entries(actions).forEach(([generator, all]: [string, Array<string>]) => {
    all.forEach(action => {
      yargs.command(`${generator} ${action} [name]`, `It's a generator!`)
    })
  })
  return yargs
}

const logger = new Logger((...msg) => console.log(...msg))
console.log(hygenYargs(process.argv.slice(2), logger))


// console.log(availableActions())
