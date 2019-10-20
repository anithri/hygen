import { CliPartial } from '../hygen'
// import path from 'path'
const path = require('path')
/* The environment contains all of the details of the running environment
 *  including current directory, the default and environment specific paths
 *  and io functions */

export const linux: CliPartial = {
  env: {
    argv:  process.argv
  },
  io: {
    path,
    exec: (action, body) => {
      const opts = body && body.length > 0 ? { input: body } : {}
      return require('execa').shell(action, opts)
    },
  },
}
