import { environments } from '../index'

describe('environments = {linux: {...}}', () => {
  it('should be an object with a linux key', () => {
    expect(environments).toContainKeys(['linux', 'defaults'])
  })

  describe('defaults', () => {
    const defaults = environments.defaults
    it('should have required keys', () => {
      expect(defaults).toContainKeys(['env', 'io'])
    })
  })
  describe('linux', () => {
    const linux = environments.linux
    it('should have required keys', () => {
      expect(linux).toContainKeys(['env', 'io'])
    })
  })
})
