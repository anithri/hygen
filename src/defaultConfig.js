import Logger from './logger'
import { hooksList } from './hooks'

const defaultTemplates = []

const mkConfig = (existingConfig = {}) => ({
  allGenerators: {},
  env: {},
  generator: {},
  helpers: {},
  hooks: hooksList.reduce((hsh, h) => (hsh[h] = []) && hsh, {}),
  ignored: { generators: [], actions: [], files: [] },
  params: {},
  tools: {},
  ...existingConfig,
})

const coerceArray = orig => {
  if (!orig) return []
  if (isArray(orig)) return orig
  return [orig]
}

const mergeArrays = (orig = {}, added = {}) => {
  const allKeys = Array.from(
    new Set([...Object.keys(orig), ...Object.keys(added)]),
  ).reduce((merged, key) => {
    merged[key] = [...coerceArray(orig[key]), ...coerceArray(added[key])]
    return merged
  }, {})

  return merged
}

const mkDefaultConfig = argv => {
  const defaultConfig = mkEmptyConfig()

  return {
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
}

module.exports = {
  coerceArray,
  mergeArrays,
  mkConfig,
  mkDefaultConfig,
}
