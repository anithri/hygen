// @flow

import type { RunnerConfig } from './types'
import path from 'path'
import { ConfigResolver } from './config'

const fs = require('fs-extra')
const configResolver = new ConfigResolver('.hygen.js', {
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
