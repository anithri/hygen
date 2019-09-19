const templatesResolver = require(`../../resolvers/templates.js`)

describe('templatesResolver(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof templatesResolver).toEqual('function')
  })
})
