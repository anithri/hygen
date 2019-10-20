"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var yellow = chalk_1.default.yellow, red = chalk_1.default.red, green = chalk_1.default.green, magenta = chalk_1.default.magenta, cyan = chalk_1.default.cyan, white = chalk_1.default.white, gray = chalk_1.default.gray;
exports.CHALK_MAPPING = {
    trace: { formatter: gray, level: 0, name: 'trace' },
    debug: { formatter: cyan, level: 1, name: 'debug' },
    info: { formatter: magenta, level: 2, name: 'info' },
    warn: { formatter: yellow, level: 3, name: 'warn' },
    error: { formatter: red, level: 4, name: 'error' },
    log: { formatter: white, level: 2, name: 'log' },
    ok: { formatter: green, level: 2, name: 'ok' },
    notice: { formatter: cyan, level: 3, name: 'notice' },
    verbose: { formatter: white, level: 1, name: 'verbose' },
};
var Logger = /** @class */ (function () {
    function Logger(log, yargs, mappings) {
        var _this = this;
        if (yargs === void 0) { yargs = {}; }
        if (mappings === void 0) { mappings = exports.CHALK_MAPPING; }
        this.logLevel = 2;
        this.logThis = function (entry) {
            return function () {
                var msgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msgs[_i] = arguments[_i];
                }
                if (entry.level > _this.logLevel)
                    return;
                _this.log(entry.formatter(msgs));
            };
        };
        // TODO - find correct typescript to do this dynamically or via proxy
        this.trace = this.logThis(this.mappings.trace);
        this.debug = this.logThis(this.mappings.debug);
        this.info = this.logThis(this.mappings.info);
        this.warn = this.logThis(this.mappings.warn);
        this.error = this.logThis(this.mappings.error);
        this.ok = this.logThis(this.mappings.ok);
        this.notice = this.logThis(this.mappings.notice);
        this.verbose = this.logThis(this.mappings.verbose);
        this.logLevelFrom = function (yargv) {
            if (yargv.logLevel)
                return yargv.logLevel;
            if (yargv.silent)
                return 5;
            if (yargv.quiet)
                return 4;
            if (yargv.warn)
                return 3;
            if (yargv.debug || process.env.DEBUG)
                return 1;
            if (yargv.trace)
                return 0;
            return 2;
        };
        this.yargs = yargs;
        this.log = log;
        this.mappings = mappings;
        this.setLevelFrom(yargs);
    }
    Logger.prototype.setLevelFrom = function (yargs) {
        this.logLevel = this.logLevelFrom(yargs);
    };
    return Logger;
}());
exports.Logger = Logger;
