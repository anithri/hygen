const chalk = require('chalk')
const { yellow, red, green, magenta, cyan, white, gray } = chalk
const template = require('chalk/templates')
const chalkMapping = {
  debug: gray,
  err: red,
  notice: magenta,
  ok: green,
  verbose: white,
  warn: yellow,
}
class Logger {
  constructor(log, { v, verbose, q, quiet, debug }, mappings = chalkMapping) {
    this.log = log
    this.verbose = v || verbose
    this.quiet = q || quiet
    this.debug = debug
    this.mappings = mappings

    Object.entries(mappings).forEach(([logType, color]) => {
      this[logType] = _mkLogType(color, log)
    })
  }

  _mkLogType(color, log) {
    return msg => log(color(msg))
  }

  colorful(msg) {
    this.log(template(chalk, msg))
  }
}

module.exports = Logger
