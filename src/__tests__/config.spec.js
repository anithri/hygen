import path from 'path'
import os from 'os'
import { ConfigResolver } from '../config'

describe('resolver', () => {
  it('resolves closest file', async () => {
    const exists = jest.fn()
    exists.mockReturnValue(Promise.resolve(true))

    const load = jest.fn()
    load.mockReturnValue(Promise.resolve({ param: 1 }))

    const resolver = new ConfigResolver('.hygen.js', {
      exists,
      load,
    })
    const config = await resolver.resolve('/foo/bar')
    expect(config).toEqual({ param: 1 })
  })

  it('resolves a file in the walk path', async () => {
    const exists = jest.fn(f => f === '/foo/.hygen.js')

    const load = jest.fn()
    load.mockReturnValue(Promise.resolve({ param: 1 }))

    const resolver = new ConfigResolver('.hygen.js', {
      exists,
      load,
    })
    const config = await resolver.resolve('/foo/bar')

    expect(config).toEqual({ param: 1 })
  })
})
