// @flow
import type { RunnerResult, RunnerConfig } from './types'

const mkDefaultConfig = require('./defaultConfig')
const engine = require('./engine')
const resolveConfig = require('./resolvers')
const { printHelp, availableActions, earlyHelp } = require('./help')
const { configHooksResolver } = require('./hooks')
const { moduleResolver } = require('src/resolvers/modules')

const resolveGenerator = a => a // find _templates/generator/action/:subaction
const resolveParams = a => a // find files in action dir up looking for index.js
const resolveTemplates = a => a // find template files to render
const render = a => a // render template

const preModuleHooks = configHooksResolver('postConfig')
const postModuleHooks = configHooksResolver('postConfig')
const preGeneratorHooks = configHooksResolver('preGenerator')
const postGeneratorHooks = configHooksResolver('postGenerator')
const preParamsHooks = configHooksResolver('preParams')
const postParamsHooks = configHooksResolver('postParams')
const preTemplatesHooks = configHooksResolver('preTemplates')
const postTemplatesHooks = configHooksResolver('postTemplates')
const preRenderHooks = configHooksResolver('preRender')
const postRenderHooks = configHooksResolver('postRender')

/* HygenHook = (hygenVars: HygenVars) => HygenVars */
/* HygenVars = {config: HygenConfig, params: HygenParams, HygenGenerator}

/* module:
  logger: initializes the logger, set logLevel
  help: adds preGeneratorHook to check for globalhelp request
  myModule: adds some helpers
*/
const resolveModules = moduleResolver(['logger', 'help', 'myModule'])

const hygen = async (argv: Array<string>): Promise<HygenVars> => {
  /*  every then function is
      fn: (vars: HygenVars): Promise<HygenVars>
   */

  return (
    resolveConfig(mkDefaultConfig(argv))
      .then(preModuleHooks) // prep for modules
      .then(resolveModules) // load modules
      .then(postModuleHooks) // finish modules config - often module setup

      .then(preGeneratorHooks) // prior to looking for a specific generator
      .then(resolveGenerator) // find the specific generator
      .then(postGeneratorHooks) // manipulate generator prior to params

      .then(preParamsHooks) // module step
      .then(resolveParams) // find all params
      .then(postParamsHooks) // twiddle prams from config

      .then(preTemplatesHooks) // prior to scanning for template files
      .then(resolveTemplates) // read template files
      .then(postTemplatesHooks) // twiddle templates from config
      // or act on what's found

      .then(preRenderHooks) // final chance to tweak
      .then(render) // process those templates
      .then(postRenderHooks) // finish up

      .catch(err => {
        configBase.logger.error(err.toString())
        configBase.logger.debug('======== details ========')
        configBase.logger.debug(err.stack)
        configBase.logger.debug('=========================')
      })
  )
}

module.exports = {
  hygen,
  engine,
  printHelp,
  availableActions,
}
