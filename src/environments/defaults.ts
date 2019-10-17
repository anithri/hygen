import { EnvConfig ,EnvironmentConfig } from 'hygen/env'
/* The environment contains all of the details of the running environment
*  including current directory, the default and environment specific paths
*  and io functions */

export const defaults: EnvConfig = {
  cwd: process.cwd(),
  configPaths: ['./.hygen.js'],
  templatePaths: ['./_templates'],
  hygenIgnorePaths: ['.hygenignore'],
}
