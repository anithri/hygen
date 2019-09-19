const generatorResolver = require(`../../resolvers/generator.js`)

describe('generatorResolver(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof generatorResolver).toEqual('function')
  })
})
