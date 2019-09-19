import { mergeVars } from './hygenVars'
import type { HygenVars } from './types'
import { mkLogger } from './logger'

const mkConfig = (existingConfig: HygenVars = {}): HygenVars => ({
  env: {},
  generator: {},
  helpers: {},
  hooks: {},
  ignored: { generators: [], actions: [], files: [], patterns: [] },
  params: {},
  tools: {},
  ...existingConfig,
})

const mkDefaultConfig = (cliConfig: HygenVars = {}): HygenVars => {
  const baseConfig = mkConfig(cliConfig)

  return baseConfig
}

module.exports = { mkConfig, defaultConfig }
const h = {
  ...mkEmptyConfig(),
  cwd: process.cwd(),
  logger: new Logger(console.log.bind(console), argv),
  exec: (action, body) => {
    const opts = body && body.length > 0 ? { input: body } : {}
    return require('execa').shell(action, opts)
  },
  createPrompter: () => require('enquirer'),
  hooks: {},
  ignored: {},
  argv,

}
