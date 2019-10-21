import { ResolverFn } from '../../hygen/resolver'
import { yargsResolver } from '../yargs'
import { loggerResolver } from '../logger'
import { configFilesResolver } from '../fileSystem'

export const ambientResolver: ResolverFn = config =>
  yargsResolver(config)
    // .then(config => console.log('afterYargs', config) || config)
    .then(loggerResolver)
    .then(configFilesResolver)

    .then(config => {
      if (config.logger) {
        config.logger.debug('ambientResolver finished')
        config.logger.trace('ambientResolver', config)
      }
      return  config
    })

