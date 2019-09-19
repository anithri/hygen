// @flow
import { mergeVars } from '../hygenVars'
import type { HygenConfig } from '../types'
import { mkConfigPromise } from '../defaultConfig'
import { configLookup } from '../config'

const resolve = async (initialConfig: HygenConfig): Promise<HygenConfig> => {
  const { load, exists } = initialConfig.tools.io
  const { exists, load } = config.tools.io
  const { configFile, cwd } = config.env
  const { path } = config.tools
  const maybeFiles = configLookup(configFile, cwd, path)

  const findConfigFiles = maybeFiles.map(file => exists(file))

  return Promise.all(findConfigFiles)
    .then(files =>
      maybeFiles
        .map((file, idx) => file && maybeFiles[idx])
        .filter(file => file)
    )
    // TODO change for multiple config files
    .then(files => {
      return files.slice(0,1)
    })
    .then(files => Promise.all(files.map(file => load(file))))
    // TODO change this merge multiple configs
    .then(configs => configs[0])

  // return mkConfigPromise(initialConfig)
  //   .then(loadConfigFile)
  //   .then(config => )
}

module.exports = {
  resolve,
  name: 'config',
  hooks: ['postConfig'],
}
