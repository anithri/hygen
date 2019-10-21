import { CliConfig, CliPartial } from '../hygen'
import { defaults } from './defaults'
import { linux } from './linux'
import {mergeConfig} from '../utils/mergeConfig'

/* The environment contains all of the details of the running environment
 *  including current directory, the default and environment specific paths
 *  and io functions */
export const environments: {[s: string]: CliPartial} = {
  defaults,
  linux,
  // win32: {}
}

// TODO - consider overloads
// environmentFor('name')
// environmentFor('/any/absolute/path')
// environmentsFor({custom: :environment})
export const environmentFor = (name: string): CliConfig => {
  return mergeConfig(defaults, environments[name]) as CliConfig
}
