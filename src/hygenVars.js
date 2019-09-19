// @flow

import type { HygenVars } from 'src/types'

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

const mergeVars = (orig: HygenVars, added: HygenVars): HygenVars => {}

module.exports = { coerceArray, mergeArrays, mergeVars }
