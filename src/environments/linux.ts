import { IOContainer } from 'hygen/environments'
// import path from 'path'
const path = require('path')
/* The environment contains all of the details of the running environment
 *  including current directory, the default and environment specific paths
 *  and io functions */

export const linux: IOContainer = {
  io: {
    path,
  },
}
