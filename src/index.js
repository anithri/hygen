// @flow
import type { HygenVars, Resolver, ChainedVars } from './types'
import { mkDefaultConfig } from './defaultConfig'

const masterResolvers: Array<Resolver> = [
  require('./resolvers/config'),
  require('./resolvers/module'),
  require('./resolvers/yargs'),
  require('./resolvers/generator'),
  require('./resolvers/params'),
  require('./resolvers/templates'),
  require('./resolvers/directives'),
  require('./resolvers/render'),
]

const chainPromise = async (firstLink: Promise<HygenVars>, resolvers: Array<Resolver>): Promise<void> => {
  return resolvers.reduce(
    async (chain: Promise<HygenVars>, resolver: Resolver): Promise<HygenVars> => {
      return chain.then(resolver.resolve)
    },
    firstLink,
  )
}

const hygen = async (config: HygenVars): Promise<void> =>
  chainPromise(mkDefaultConfig(config), masterResolvers)
    .catch(err => {
      config.logger.error(err.toString())
      config.logger.debug('======== details ========')
      config.logger.debug(err.stack)
      config.logger.debug('=========================')
    })

resolver.exports = {
  hygen,
  engine,
  printHelp,
  availableActions,
}
