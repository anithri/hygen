import { CliConfig, CliPartials, EnvironmentConfig } from '../hygen'
import { defaults } from './defaults'
import { linux } from './linux'

/* The environment contains all of the details of the running environment
 *  including current directory, the default and environment specific paths
 *  and io functions */
export const environments: CliPartials = {
  defaults,
  linux,
  // win32: {}
}

// TODO - consider overloads
// environmentFor('name')
// environmentFor('/any/absolute/path')
// environmentsFor({custom: :environment})
export const environmentFor = (name: string): CliConfig => {
  return {
    ...environments.defaults,
    ...environments[name]
  }
}
