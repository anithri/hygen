---
to: <%- `${process.cwd()}/src/__tests__/resolvers/${name}.spec.js` %>
resolverName: <%- resolverName = `${name}Resolver` %>
---
const <%- resolverName %> = require(`../../resolvers/<%- name %>.js`)

describe('<%- resolverName %>(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof <%- resolverName %>).toEqual('function')
  })
})
