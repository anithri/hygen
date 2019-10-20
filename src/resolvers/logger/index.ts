import { ResolverFn } from '../../hygen/resolver'
import { Logger } from '../../utils/Logger'
import { HygenConfig } from '../../hygen/config'

export const loggerResolver: ResolverFn = (config) =>
  Promise.resolve({
    ...config,
    logger: new Logger(config.io.log, config.yargv),
  } as unknown as HygenConfig)


