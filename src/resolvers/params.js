const { mergeVars } = require('../hygenVars')

const paramsResolver = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { paramsResolver }
