const { mergeVars } = require('../hygenVars')

const configResolver = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { configResolver }
