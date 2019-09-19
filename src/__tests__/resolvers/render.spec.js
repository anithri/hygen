const renderResolver = require(`../../resolvers/render.js`)

describe('renderResolver(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof renderResolver).toEqual('function')
  })
})
