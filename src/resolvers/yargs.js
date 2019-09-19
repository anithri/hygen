const { mergeVars } = require('../hygenVars')

const yargsResolver = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { yargsResolver }
