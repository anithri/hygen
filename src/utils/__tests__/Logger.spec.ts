import { Logger } from '../Logger'
import { ChalkMapping, LogMessage } from '../../hygen'

describe('new Logger(log,argv,mappings)', () => {
  let myLogger: jest.Mock<LogMessage>

  beforeEach(() => {
    myLogger = jest.fn((msgs: Array<any>): void => {
      msgs
    }) as unknown as jest.Mock<LogMessage>
  })

  it('should take a log function', () => {
    const logger = new Logger(myLogger)

    const result = logger.log('woot')
    expect(myLogger.mock.calls[0][0]).toBe('woot')
  })
  it('should have multiple logTypes', () => {
    const logger = new Logger(myLogger)

    expect(logger).toHaveProperty('debug')
    expect(logger).toHaveProperty('error')
    expect(logger).toHaveProperty('info')
    expect(logger).toHaveProperty('ok')
    expect(logger).toHaveProperty('silent')
    expect(logger).toHaveProperty('verbose')
    expect(logger).toHaveProperty('warn')
  })
  describe('logLevels', () => {
    it('should set a default logLevel', () => {
      const logger = new Logger(myLogger)
      expect(logger.logLevel).toEqual(2)
    })
    it('should set appropriate levels based on argv', () => {
      const logger = new Logger(myLogger)

      expect(logger.logLevelFrom({ logLevel: 42 })).toEqual(42)
      expect(logger.logLevelFrom({ silent: true })).toEqual(5)
      expect(logger.logLevelFrom({ quiet: true })).toEqual(4)
      expect(logger.logLevelFrom({ warn: true })).toEqual(3)
      expect(logger.logLevelFrom({})).toEqual(2)
      expect(logger.logLevelFrom({ debug: true })).toEqual(1)
      expect(logger.logLevelFrom({ trace: true })).toEqual(0)
    })
    describe('should set appropriate levels based on process.env', () => {
      describe('DEBUG', () => {
        const origEnvDEBUG = process.env.DEBUG

        afterEach(() => (process.env.DEBUG = origEnvDEBUG))

        it('should set debug for DEBUG=true', () => {
          const logger = new Logger(myLogger)

          const initialResult = logger.logLevel
          process.env.DEBUG = 'true'
          logger.setLevelFrom({})
          const envResult = logger.logLevel

          expect(initialResult).toEqual(2)
          expect(envResult).toEqual(1)
        })
      })
    })
  })
  xit('should not send messages below logLevel', () => {
    // TODO rewrite to change testing on myLogger since returning void now
    const logger = new Logger(myLogger, { quiet: true })

    const resultAbove = logger.error('above')
    const resultBelow = logger.trace('below')

    expect(myLogger.mock.calls.length).toBe(1)
  })

  // xit('should add run formatter to messages', () => {
  //   // TODO rewrite to change testing on myLogger since returning void now
  //
  //   const logger = new Logger(myLogger)
  //
  //   const result = logger.ok('woot')
  //
  //   expect(result).toMatch('woot')
  // })
  // xit('should allow custom mappings', () => {
  //   // TODO rewrite to change testing on myLogger since returning void now
  //   const myMapping: ChalkMapping = {
  //     woot: { name: 'woot', formatter: msg => msg.toUpperCase(), level: 0 },
  //   }
  //   const logger = new Logger(myLogger, {}, myMapping)
  //
  //   const result = logger.woot('prime')
  //
  //   expect(result).toEqual('PRIME')
  // })
})
