const moduleResolver = require(`../../resolvers/module.js`)

describe('moduleResolver(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof moduleResolver).toEqual('function')
  })
})
