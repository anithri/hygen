"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var hygenOptions_1 = require("./hygenOptions");
var loggerOptions_1 = require("./loggerOptions");
var mergeConfig_1 = require("../../utils/mergeConfig");
exports.yargsResolver = function (config) {
    return Promise.resolve(yargs_1.default(config.env.argv).parserConfiguration({
        'combine-arrays': true,
    })
        .scriptName('hygen')
        .usage('$0 [global-args] <generator> <action> <name> [args]')
        .version(false)
        .help('help', 'Show help (use --verbose for complete help)')
        .alias('help', 'h')
        .env('HYGEN')
        .options(hygenOptions_1.hygenOptions)
        .options(loggerOptions_1.loggerOptions)
        .showHidden('verbose', 'show all the help')
        .argv).then(function (yargv) { return (mergeConfig_1.mergeConfig(config, {
        yargv: yargv,
        params: yargv,
    })); });
};
