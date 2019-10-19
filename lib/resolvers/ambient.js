"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_parser_1 = __importDefault(require("yargs-parser"));
exports.ambientResolver = function (config) {
    yargsResolver(config.env.argv);
    // assemble yargs
    // instantiate logger
    // do stuff here
};
var yargsResolver = function (argv) {
    var yargv = yargs_parser_1.default(argv)
        .scriptName('hygen')
        .env('HYGEN')
        .version(false)
        .usage('$0 [global-args] <generator> <action> <name> [args]')
        .help().alias('help', 'h').argv;
    console.log(yargv);
    return {};
};
