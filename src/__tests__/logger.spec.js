import logger from '../logger'

describe('new Logger(log,argv,mappings)', () => {
  it('should be a function', () => {
    expect(typeof logger).toBe('function')
  })
})
