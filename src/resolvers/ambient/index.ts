import { ResolverFn } from '../../hygen/resolver'
import { yargsResolver } from '../yargs'
import { loggerResolver } from '../logger'

export const ambientResolver: ResolverFn = config =>
  yargsResolver(config)
    // .then(config => console.log('afterYargs', config) || config)
    .then(loggerResolver)
    .then(config => {
      console.log('finalAmbient', config)
      return  config
    })

