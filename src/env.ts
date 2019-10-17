import { EnvironmentConfig } from './hygen/env'

const defaults = {
  cwd: process.cwd(),
  configPaths: [],
  templatePaths: ['_templates'],
  hygenIgnorePaths: ['.hygenignore'],
}

const environments: EnvironmentConfig = {
  linux: {
    ...defaults
  },
  // win32: {}
}

export default environments
