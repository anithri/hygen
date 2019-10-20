"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("../Logger");
describe('new Logger(log,argv,mappings)', function () {
    var myLogger;
    beforeEach(function () {
        myLogger = jest.fn(function (msgs) {
            msgs;
        });
    });
    it('should take a log function', function () {
        var logger = new Logger_1.Logger(myLogger);
        var result = logger.log('woot');
        expect(myLogger.mock.calls[0][0]).toBe('woot');
    });
    it('should have multiple logTypes', function () {
        var logger = new Logger_1.Logger(myLogger);
        expect(logger).toHaveProperty('debug');
        expect(logger).toHaveProperty('error');
        expect(logger).toHaveProperty('info');
        expect(logger).toHaveProperty('ok');
        expect(logger).toHaveProperty('silent');
        expect(logger).toHaveProperty('verbose');
        expect(logger).toHaveProperty('warn');
    });
    describe('logLevels', function () {
        it('should set a default logLevel', function () {
            var logger = new Logger_1.Logger(myLogger);
            expect(logger.logLevel).toEqual(2);
        });
        it('should set appropriate levels based on argv', function () {
            var logger = new Logger_1.Logger(myLogger);
            expect(logger.logLevelFrom({ logLevel: 42 })).toEqual(42);
            expect(logger.logLevelFrom({ silent: true })).toEqual(5);
            expect(logger.logLevelFrom({ quiet: true })).toEqual(4);
            expect(logger.logLevelFrom({ warn: true })).toEqual(3);
            expect(logger.logLevelFrom({})).toEqual(2);
            expect(logger.logLevelFrom({ debug: true })).toEqual(1);
            expect(logger.logLevelFrom({ trace: true })).toEqual(0);
        });
        describe('should set appropriate levels based on process.env', function () {
            describe('DEBUG', function () {
                var origEnvDEBUG = process.env.DEBUG;
                afterEach(function () { return (process.env.DEBUG = origEnvDEBUG); });
                it('should set debug for DEBUG=true', function () {
                    var logger = new Logger_1.Logger(myLogger);
                    var initialResult = logger.logLevel;
                    process.env.DEBUG = 'true';
                    logger.setLevelFrom({});
                    var envResult = logger.logLevel;
                    expect(initialResult).toEqual(2);
                    expect(envResult).toEqual(1);
                });
            });
        });
    });
    xit('should not send messages below logLevel', function () {
        // TODO rewrite to change testing on myLogger since returning void now
        var logger = new Logger_1.Logger(myLogger, { quiet: true });
        var resultAbove = logger.error('above');
        var resultBelow = logger.trace('below');
        expect(myLogger.mock.calls.length).toBe(1);
    });
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
});
