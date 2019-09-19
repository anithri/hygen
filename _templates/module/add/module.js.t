---
to: <%- `${process.cwd()}/src/modules/${name}.js` %>
moduleName: <%- moduleName = `${name}Module` %>
---
const { mergeVars } = require('../hygenVars')

const <%- moduleName %> = args => {
  return vars => mergeVars(args, vars)
}

module.exports = {<%- moduleName %>}
