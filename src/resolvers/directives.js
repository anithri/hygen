const { mergeVars } = require('../hygenVars')

const directivesResolver = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { directivesResolver }
