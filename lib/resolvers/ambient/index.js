"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var hygenOptions_1 = require("./hygenOptions");
var loggerOptions_1 = require("./loggerOptions");
exports.ambientResolver = function (config) {
    return Promise.resolve(__assign(__assign({}, config), { params: yargsResolver(config.env.argv || []) }));
    // assemble yargs
    // instantiate logger
    // do stuff here
};
var yargsBuilder = function (yargs) {
    yargs
        .command('generator <action>', 'Generator', function (yargs) {
        yargs.positional('action', {
            describe: 'action containing templates to generate',
            type: 'string',
            choices: ['help', 'new', 'with-prompt'],
        }).requiresArg('action');
    })
        .command('resolver <action>', 'Generator')
        .command('utility <action>', 'Generator')
        .command('base <action>', 'generate a template using action', {}, function (yargs) { return console.log(yargs); })
        .demandCommand(2, 'Choose a generator and action')
        .help();
};
var yargsHandler = function (yargv) {
    process.exit();
};
var yargsResolver = function (origArgv) {
    var yargv = yargs_1.default(origArgv).parserConfiguration({
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
        // .command('*', false, yargsBuilder, yargsHandler)
        .argv;
    console.log(yargv);
    return yargv;
};
