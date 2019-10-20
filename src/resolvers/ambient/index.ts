import yargsParser from 'yargs'
import { ResolverFn } from '../../hygen/resolver'
import { Argv, argv } from 'yargs'
import { hygenOptions } from './hygenOptions'
import { loggerOptions } from './loggerOptions'

export const ambientResolver: ResolverFn = (config) => {
  return Promise.resolve({
    ...config,
    params: yargsResolver(config.env.argv || []),
  })
  // assemble yargs
  // instantiate logger
  // do stuff here
}
const yargsBuilder = (yargs: Argv) => {
  yargs
    .command('generator <action>', 'Generator', (yargs: Argv): void => {
      yargs.positional('action', {
        describe: 'action containing templates to generate',
        type: 'string',
        choices: ['help', 'new', 'with-prompt'],
      }).requiresArg('action')
    })
    .command('resolver <action>', 'Generator')
    .command('utility <action>', 'Generator')
    .command('base <action>', 'generate a template using action', {}, yargs => console.log(yargs))
    .demandCommand(2, 'Choose a generator and action')
    .help()
}

const yargsHandler = (yargv: Argv['argv']) => {
  process.exit()

}

const yargsResolver = (origArgv: Array<string>): Argv['argv'] => {
  const yargv: Argv['argv'] = yargsParser(origArgv).parserConfiguration({
    'combine-arrays': true,
  })
    .scriptName('hygen')
    .usage('$0 [global-args] <generator> <action> <name> [args]')
    .version(false)
    .help('help', 'Show help (use --verbose for complete help)')
    .alias('help', 'h')
    .env('HYGEN')
    .options(hygenOptions)
    .options(loggerOptions)
    .showHidden('verbose', 'show all the help')

    // .command('*', false, yargsBuilder, yargsHandler)
    .argv
  console.log(yargv)
  return yargv
}
