import { CliPartial } from '../hygen'
/* The environment contains all of the details of the running environment
*  including current directory, the default and environment specific paths
*  and io functions */

export const defaults: CliPartial = {
  env: {
    cwd: process.cwd(),
    argv: process.argv.slice(2),
    configPaths: ['./.hygen.js'],
    templatePaths: ['./_templates'],
    hygenIgnorePaths: ['.hygenignore'],
  },
  io: {},
}
