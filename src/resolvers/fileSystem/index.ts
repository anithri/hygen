import { ResolverFn } from '../../hygen/resolver'
import { HygenConfig } from '../../hygen/config'
import { findUpAll } from 'find-up-all'

export const configFilesResolver: ResolverFn = config => {

  // search for hygenignore and hygen config files
  return Promise.resolve({
    ...config,
  } as HygenConfig)
}

export const configLoaderResolver: ResolverFn = config => {
  return Promise.resolve({ ...config } as HygenConfig)
}

export const fileSystemResolver: ResolverFn = config => {
  return configFilesResolver(config)
    .then(configLoaderResolver)
  // do stuff here
}
