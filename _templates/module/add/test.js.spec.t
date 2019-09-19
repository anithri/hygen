---
resolverName: <%- resolverName = `${name}Resolver` %>
to: <%- `${process.cwd()}/src/__tests__/modules/${name}.spec.js` %>
---
const <%- resolverName %> = require(<%- `../../modules/${ name }.js` %>)

describe('<%- resolverName %>(vars: Object): Object', () => {
  it('should be a function', () => {
    expect(typeof <%- resolverName %>).toEqual('function')
  })
})
