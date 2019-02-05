const resolve = attributes => {
  const ops = []
  if (attributes.to && !attributes.inject) {
    const add = require('./add')
    ops.push(add)
  }
  if (attributes.to && attributes.inject) {
    const inject = require('./inject')
    ops.push(inject)
  }
  if (attributes.sh) {
    const shell = require('./shell')
    ops.push(shell)
  }
  if (attributes.npm_packages || attributes.yarn_packages || attributes.ruby_packages) {
    const packages = require('./packages')
    ops.push(packages)
  }
  return ops
}
module.exports = resolve
