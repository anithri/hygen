import { coerceArray, mergeArrays } from '../../resolvers/utils'

describe('coerceArray(orig: object): object', () => {
  it('should coerce values into an array', () => {
    expect(coerceArray()).toEqual([])
    expect(coerceArray(42)).toEqual([42])
    expect(coerceArray([17, 23])).toEqual([17, 23])
  })
})

describe('mergeArrays(orig: Object, added: Object ): Object', () => {
  it('should merge objects', () => {
    expect(mergeArrays()).toEqual({})
  })
  it('should use empty arrays for falsey keys', () => {
    const result = mergeArrays({woot: false})

    expect(result).toEqual({woot: []})
  })
  it('should convert scalar values to arrays', () => {
    const result = mergeArrays({woot: 'prime'})

    expect(result).toEqual({woot: ['prime']})
  })
  it('should merge values from orig and added', () => {
    const orig = {batman: 'forever'}
    const added = {sidekicks: ['robin']}
    const result = mergeArrays(orig, added)

    expect(result).toEqual({batman: ['forever'], sidekicks: ['robin']})
  })
})
