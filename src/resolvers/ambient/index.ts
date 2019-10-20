import { ResolverFn } from '../../hygen/resolver'
import { yargsResolver } from '../yargs'
import { loggerResolver } from '../logger'

export const ambientResolver: ResolverFn = config =>
  yargsResolver(config)
    .then(loggerResolver)
