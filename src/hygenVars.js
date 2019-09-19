// @flow

import type { HygenConfig, HygenVars, Resolver } from 'src/types'

const coerceArray = (orig?: any): Array<any> => {
  if (!orig) return []
  if (Array.isArray(orig)) return orig
  return [orig]
}

const mergeArrays = (orig: Object = {}, added: Object = {}): Object =>
  Array.from(new Set([...Object.keys(orig), ...Object.keys(added)])).reduce(
    (merged, key) => {
      merged[key] = [...coerceArray(orig[key]), ...coerceArray(added[key])]
      return merged
    },
    {},
  )

const chainPromise = async (
  firstLink: Promise<HygenConfig>,
  resolvers: Array<Resolver>,
): Promise<HygenConfig> => {
  return resolvers.reduce(
    async (
      chain: Promise<HygenConfig>,
      resolver: Resolver,
    ): Promise<HygenConfig> => {
      return chain.then(resolver.resolve)
    },
    firstLink,
  )
}

const mergeVars = (orig: HygenVars, added: HygenVars): HygenVars => {}

module.exports = { coerceArray, mergeArrays, mergeVars, chainPromise }
