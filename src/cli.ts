import { CliConfig } from './hygen'
import { ambientResolver } from './resolvers/ambient'

export const cli = (config: CliConfig): void => {
  // console.log('cli',config)
  ambientResolver(config)
    .then(config => console.log('finalConfig', config))
  // gets ambient environment data
  // gets os specific functions
}
