const fs = require('fs')
const importedPath = require('path')

const walkDirUp = ({
  startAt,
  withFile = '',
  path = importedPath,
  stopAt = path.sep,
}) => {
  if (!stopAt) return [path.join(path.resolve(startAt), withFile)]
  const parts = path.resolve(startAt).split(path.sep)

  const topDir =
    path.sep === path.win32.sep && stopAt === path.sep ? parts[0] : stopAt

  return Array.from(
    parts.reduce((dirs, dir, idx, arr) => {
      const configDir = arr.slice(0, idx + 1).join(path.sep) || path.sep

      if (configDir.startsWith(topDir)) {
        dirs.add(path.join(configDir, withFile))
      }
      return dirs
    }, new Set([])),
  ).reverse()
}

module.exports = {
  walkDirUp,
}
