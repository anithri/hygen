const configResolver = require(`../../resolvers/config.js`)

describe('configResolver(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof configResolver).toEqual('function')
  })
})
