// @flow
import importedPath from 'path'
import type { ResolverIO } from './types'
import { walkDirUp } from './walkers'

// inline fp methods due to perf
// const uniq = arr => arr.filter((elem, pos, a) => a.indexOf(elem) === pos)

class ConfigResolver {
  configFile: string
  io: ResolverIO

  constructor(configFile: string, io: ResolverIO) {
    this.configFile = configFile
    this.io = io
  }

  async resolve(from: string): ResolverIO {
    const { exists, load, none, path = importedPath } = this.io

    const configCandidates = walkDirUp({
      startAt: from,
      withFile: this.configFile,
      path,
    }).map(
      candidate =>
        new Promise((resolve, reject) => {
          exists(candidate) ? resolve(candidate) : resolve(false)
        }),
    )

    const config = await Promise.all(configCandidates)
      .then(arr => arr.filter(e => e))
      .then(
        arr =>
          new Promise(resolve => {
            load(arr[0]).then(fileConfig => resolve(fileConfig))
          }),
      )

    return config || {}
  }
}

export { ConfigResolver }
