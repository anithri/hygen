import fs from 'fs-extra'

describe('hygen executable', () => {
  /* how else to test this? */
  it('should be a function', () => {
    return fs.pathExists('./src/bin.ts')
      .then(data => {
        expect(data).toBeTruthy()
      })
  })
})
