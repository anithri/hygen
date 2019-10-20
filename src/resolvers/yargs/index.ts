import yargsParser from 'yargs'
import { ResolverFn } from '../../hygen/resolver'
import { Argv, argv } from 'yargs'
import { hygenOptions } from './hygenOptions'
import { loggerOptions } from './loggerOptions'
import { HygenConfig } from '../../hygen/config'
import { mergeConfig } from '../../utils/mergeConfig'

export const yargsResolver: ResolverFn = config =>
  Promise.resolve(
    yargsParser(config.env.argv).parserConfiguration({
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
      .argv,
  ).then((yargv: object): HygenConfig => (mergeConfig(config, {
    yargv,
    params: yargv,
  })) as HygenConfig)

