import { CliConfig } from '../hygen'
/* The environment contains all of the details of the running environment
*  including current directory, the default and environment specific paths
*  and io functions */

export const defaults: CliConfig = {
  env: {
    cwd: process.cwd(),
    configPaths: ['./.hygen.js'],
    templatePaths: ['./_templates'],
    hygenIgnorePaths: ['.hygenignore'],
  },
  io: {},
}
