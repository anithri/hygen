const { mergeVars } = require('../hygenVars')

const renderResolver = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { renderResolver }
