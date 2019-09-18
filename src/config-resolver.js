// @flow

import type { RunnerConfig } from './types'
import path from 'path'
import fs from 'fs-extra'
import { ConfigResolver } from './config'

const hygenConfigFile = process.env.HYGEN_CONFIG_FILE || '.hygen.js'

const configResolver = new ConfigResolver(hygenConfigFile, {
  exists: f => new Promise(resolve => resolve(fs.exists(f))),
  // $FlowFixMe
  load: f => Promise.resolve(require(f)),
  none: f => ({}),
  path,
})

module.exports = async (config: RunnerConfig): Promise<RunnerConfig> => {
  const { cwd, templates } = config

  const resolvedTemplates =
    [process.env.HYGEN_TMPLS, path.join(cwd, '_templates')].find(
      _ => _ && fs.existsSync(_),
    ) || templates

  return {
    ...config,
    templates: resolvedTemplates,
    ...(await configResolver.resolve(cwd)),
  }
}
