// import { HygenConfig } from '../hygen'

// Merge 2 objects according to these rules.
//   1. Any key in fresh, not in stale is added to final
//   2. if fresh value is array,
// @param {object} stale object which is being changed
// @param {object} fresh object to be merged
// @return {object} result of merge rules on stale and fresh

let startsWith = (stale: Record<string, any>): Record<string, any> => ({...stale})

export const mergeConfig = (stale: Record<string, any>, fresh: Record<string, any>, deeper: boolean= true):Record<string, any> =>
  Object.entries(fresh).reduce(
    (final: Record<string, any>, [key, value]: [string, any]): Record<string, any> => {
      if (!final[key]) {
        /* when the fresh key does not exist in stale */
        final[key] = value
      } else if (Array.isArray(value) && Array.isArray(final[key])) {
        /* when both values are arrays */
        final[key] = [...final[key], ...fresh[key]]
      } else if (typeof value === 'function') {
        /* when fresh is a function */
        final[key] = value(final[key])
      } else if (
        deeper &&
        typeof value === 'object' &&
        typeof final[key] === 'object'
      ) {
        /* when both values are objects */
        final[key] = mergeConfig(final[key], value, false)
      } else {
        /* in every other case */
        final[key] = value
      }
      // console.log('mergeConfig', final)
      if (final.logger && deeper) {
        const c = {
          stale: Object.keys(stale).length,
          fresh: Object.keys(fresh).length,
          final: Object.keys(final).length,
        }
        final.logger.debug(`  results: stale: ${c.stale}, fresh: ${c.fresh}, final: ${c.final} `)
        final.logger.trace('mergeConfig(stale, fresh, deeper = true) ===', final)
      }
      return final
    },
    startsWith(stale),
  )

