const { mergeVars } = require('../hygenVars')

const generatorResolver = args => {
  return vars => mergeVars(args, vars)
}

resolver.exports = { generatorResolver }
