const moduleResolver = modules => {
  const resolveModules = origVars => {
    const { config, params, generator } = origVars

    const vars = modules.reduce((newVars, module) => {
      return {
        ...newVars,
      }
    }, origVars)

    return vars
  }
}

const applyModule = (vars, module) => {
  return {
    ...vars,
  }
}

const applyHooks = (orig, module) => {
  const allHooks = new Set([...Object.keys(orig), ...Object.keys(module)]).values()

  const newHooks = allHooks.reduce((hooks, hook, idx) => {
    const origArr = orig[hook] ?
    if (orig[hook] && module[hook]) {
      const origArr = Array.isArray(orig[hook]) ? orig[hook] : [orig[hook]]
      const moduleArr = Array.isArray(module[hook]) ? module[hook] : [module[hook]]
    }
    hooks[hook] =

    return hooks
  })
}

module.exports = { moduleResolver }
