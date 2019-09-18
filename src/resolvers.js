const resolveConfig = currentConfig => {
  // from process.cwd search parents for .hygen.js
  // read from .hygen.js
  const config = {}
  return {
    ...currentConfig,
    ...config,
  }
}

const resolveGeneratorList = config => {
  // get template paths from config
  // if none use default
  // turn to generator names and remove ignored
  // return object with k,v = name, path
  return {}
}

const resolveGenerator = (config, generatorPath) => {
  // read action dirs
  // read subaction dirs
  // skip index.js, params.js, prompt.js and ignoredActions
  return {
    actions: [],
    paramFiles: [],
  }
}

const resolveGeneratorParams = config => {
  // from _templates/generator/action
  // seek ['index.js','params.js','prompt.js'] files
  // require and find hooks

  return {}
}

module.exports = {
  resolveConfig,
  resolveGeneratorList,
  resolveGenerator,
  resolveGeneratorParams,
}
