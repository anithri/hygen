import path from 'path'
const fs = require('fs-extra')

const io = {
  exists: f => fs.exists(f),
  load: f => Promise.resolve(require(f)),
  none: () => ({}),
  path,
}
