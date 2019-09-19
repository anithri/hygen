---
to: <%- `${process.cwd()}/src/resolvers/${name}.js` %>
resolverName: <%- resolverName = `${name}Resolver` %>
---
const { mergeVars } = require('../hygenVars')

const <%- resolverName %> = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { <%- resolverName %> }
