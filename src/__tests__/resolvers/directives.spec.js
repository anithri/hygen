const directivesResolver = require(`../../resolvers/directives.js`)

describe('directivesResolver(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof directivesResolver).toEqual('function')
  })
})
