import { ChalkMapping, LogMessage, LogMap } from '../hygen'
import { LogYargs } from '../hygen'
import chalk from 'chalk'

const { yellow, red, green, magenta, cyan, white, gray } = chalk
export const CHALK_MAPPING: ChalkMapping = {
  trace: { formatter: gray, level: 0, name: 'trace' },
  debug: { formatter: cyan, level: 1, name: 'debug' },
  info: { formatter: magenta, level: 2, name: 'info' },
  warn: { formatter: yellow, level: 3, name: 'warn' },
  error: { formatter: red, level: 4, name: 'error' },
  log: { formatter: white, level: 2, name: 'log' },
  ok: { formatter: green, level: 2, name: 'ok' },
  notice: { formatter: cyan, level: 3, name: 'notice' },
  verbose: { formatter: white, level: 1, name: 'verbose' },
}

export class Logger {
  yargs: LogYargs
  log: LogMessage
  mappings: ChalkMapping
  logLevel: number = 2

  constructor(
    log: LogMessage,
    yargs: LogYargs = {},
    mappings: ChalkMapping = CHALK_MAPPING,
  ) {
    this.yargs = yargs
    this.log = log
    this.mappings = mappings
    this.setLevelFrom(yargs)
  }

  logThis = (entry: LogMap, msgs: Array<any>): void => {
    if (entry.level > this.logLevel) return
    this.log(entry.formatter(msgs))
  }
  // TODO - find correct typescript to do this dynamically or via proxy
  trace: LogMessage = (...msg) => this.logThis(this.mappings.trace, msg)
  debug: LogMessage = (...msg) => this.logThis(this.mappings.debug, msg)
  info: LogMessage = (...msg) => this.logThis(this.mappings.info, msg)
  warn: LogMessage = (...msg) => this.logThis(this.mappings.warn, msg)
  error: LogMessage = (...msg) => this.logThis(this.mappings.error, msg)
  ok: LogMessage = (...msg) => this.logThis(this.mappings.ok, msg)
  notice: LogMessage = (...msg) => this.logThis(this.mappings.notice, msg)
  verbose: LogMessage = (...msg) => this.logThis(this.mappings.verbose, msg)
  silent: LogMessage = (...msg) => {}
  logLevelFrom = (yargv: LogYargs): number => {
    if (yargv.logLevel) return yargv.logLevel
    if (yargv.silent) return 5
    if (yargv.quiet) return 4
    if (yargv.warn) return 3
    if (yargv.debug || process.env.DEBUG) return 1
    if (yargv.trace) return 0
    return 2
  }

  setLevelFrom(yargs: LogYargs): void {
    this.logLevel = this.logLevelFrom(yargs)
  }

}