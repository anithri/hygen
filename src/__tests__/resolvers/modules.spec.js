import { coerceArray } from '../../resolvers/modules'

describe('coerceArray(orig: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof coerceArray).toEqual('function')
  })
})
