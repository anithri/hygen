const path = require('path')
module.exports = {
  /* default directory */
  // defaultTemplateDirectory: process.env.HYGEN_TMPLS || '_templates'

  /* additional directories to search for templates */
  // templateDirectories: [],

  /* helpers are functions available in config for templates   */
  helpers: {},

  /* hooks are functions executed during lifecycle */
  hooks: {
    /* postConfig is run after config is read but before anything else */
    // postConfig: config => config,

    /* preParams is run before any of the generator param functions */
    // preParams: (config, params) => params,
    /* postParams is run after all of the generator param functions */
    // postParams: (config, params) => params,

    /* postGenerator is run after all of the templates have been generated */
    // postGenerator: (config, params, generator) => config.log('messages')
  },

  /* directories and files to ignore as templates, actions and files */
  ignore: {
    templates: [], /* templates to skip outright */
    actions: [], /* action[:subaction] within a template */
    files: ['index.js','params.js','prompt.js'], /* files and templates */
  }
}
