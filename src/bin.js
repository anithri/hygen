#!/usr/bin/env node

const { hygen } = require('./index')
const {mkLogger} = require('./logger')

await hygen({
  environment: {
    argv: process.argv.slice(2),
    cwd: process.cwd(),
    templatesDir: process.env.HYGEN_TMPLS || '_templates',
    configFile: process.env.HYGEN_CONFIG || '.hygen.js'
  },
  logger: mkLogger(),
})
