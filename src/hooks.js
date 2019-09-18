const resolveHooks = stack => {
  const hooks = Array.isArray(stack) ? stack : [stack]
  return vars => hooks.reduce((v, hook) => hook(v), vars)
}

const hooksList = [
  'preModule',
  'postModule',
  'preGenerator',
  'postGenerator',
  'preParams',
  'postParams',
  'preTemplates',
  'postTemplates',
  'preRender',
  'postRender',
]

const configHooksResolver = hook => vars => {
  const { config } = vars
  if (!config.hooks || !config[hook]) return vars

  const postHookVars = resolveHooks(config[hook])(vars)

  config.logger.debug(`run${hook}Hooks('${hook}', config)`)
  config.logger.debug('  config:', postHookParams)
}

const exports = { configHooksResolver, hooksList }
