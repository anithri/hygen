const paramsResolver = require(`../../resolvers/params.js`)

describe('paramsResolver(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof paramsResolver).toEqual('function')
  })
})
