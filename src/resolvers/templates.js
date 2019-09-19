const { mergeVars } = require('../hygenVars')

const templatesResolver = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { templatesResolver }
