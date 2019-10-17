import fs from 'fs-extra'

describe('hygen executable', () => {
  it('should be a function', () => {
    return fs.pathExists('./bin')
      .then(data => {
        expect(data).toBeTruthy()
      })
  })
})
