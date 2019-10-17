import { EnvConfig ,EnvironmentConfig } from './hygen/env'

const defaults: EnvConfig = {
  cwd: process.cwd(),
  configPaths: [],
  templatePaths: ['_templates'],
  hygenIgnorePaths: ['.hygenignore'],
}

export const environments: EnvironmentConfig = {
  defaults,
  linux: {
    ...defaults
  },
  // win32: {}
}

