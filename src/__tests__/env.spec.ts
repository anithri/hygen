import { environments } from '../env'

describe('environments = {linux: {...}}', () => {
  it('should be an object with a linux key', () => {
    expect(environments).toContainKeys(['linux', 'defaults'])
  })

  describe('defaults', () => {
    const defaults = environments.defaults
    it('should have required keys', () => {
      expect(defaults).toContainKeys([
        'cwd',
        'configPaths',
        'templatePaths',
        'hygenIgnorePaths',
      ])
    })
  })
})
