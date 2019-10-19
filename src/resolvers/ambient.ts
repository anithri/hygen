import { CliConfig } from '../hygen'
import yargsParser from 'yargs-parser'

export const ambientResolver = (config: CliConfig):void => {
  yargsResolver(config.env.argv)
  // assemble yargs
  // instantiate logger
  // do stuff here
}

const yargsResolver = (argv: Array<string>): object => {
  const yargv = yargsParser(argv)
    .scriptName('hygen')
    .env('HYGEN')
    .version(false)
    .usage('$0 [global-args] <generator> <action> <name> [args]')
    .help().alias('help','h').argv

  console.log(yargv)

  return {}
}

