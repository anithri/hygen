// @flow
import type { RunnerResult, RunnerConfig } from './types'
const defaultConfig = require('./defaultConfig')
const engine = require('./engine')
const resolveConfig = require('./resolvers')
const { printHelp, availableActions } = require('./help')

const hygen = async (argv: Array<string>): Promise<RunnerResult> => {
  const resolvedConfig = await resolveConfig(defaultConfig)

  const { templates, logger } = resolvedConfig

  try {
    const actions = await engine(argv, resolvedConfig)
    return { success: true, actions }
  } catch (err) {
    logger.log(err.toString())
    if (config.debug) {
      logger.log('details -----------')
      logger.log(err.stack)
      logger.log('-------------------')
    }
    printHelp(templates, logger)
    return { success: false, actions: [] }
    // process.exit(1)
  }
}

module.exports = {
  hygen,
  engine,
  resolve,
  printHelp,
  availableActions,
}
