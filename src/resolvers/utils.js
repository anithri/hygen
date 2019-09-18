const coerceArray = orig => {
  if (!orig) return []
  if (Array.isArray(orig)) return orig
  return [orig]
}

const mergeArrays = (orig = {}, added = {}) =>
  Array.from(
    new Set([...Object.keys(orig), ...Object.keys(added)]),
  ).reduce((merged, key) => {
    merged[key] = [...coerceArray(orig[key]), ...coerceArray(added[key])]
    return merged
  }, {})

module.exports = { coerceArray, mergeArrays }
