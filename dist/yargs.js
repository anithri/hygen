"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
exports.hygenYargs = (...argv) => yargs_1.default(argv)
    .scriptName('hygen')
    .usage('$0 [global-args] GENERATOR ACTION [NAME] [param-args]')
    .version(false)
    .help('help')
    .alias('h', 'help')
    .command('<generator> <action> [name]', 'generate the templates for' +
    ' generator action')
    .argv;
console.log(exports.hygenYargs(process.argv));
//# sourceMappingURL=yargs.js.map