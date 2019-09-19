const yargsResolver = require(`../../resolvers/yargs.js`)

describe('yargsResolver(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof yargsResolver).toEqual('function')
  })
})
