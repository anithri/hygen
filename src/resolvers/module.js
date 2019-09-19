const { mergeVars } = require('../hygenVars')

const moduleResolver = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { moduleResolver }
