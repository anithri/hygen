import { EnvironmentConfig } from '../hygen'
import { defaults } from './defaults'
import { linux } from './linux'

/* The environment contains all of the details of the running environment
 *  including current directory, the default and environment specific paths
 *  and io functions */
export const environments: EnvironmentConfig = {
  defaults,
  linux: {
    ...defaults,
    ...linux,
  },
  // win32: {}
}
