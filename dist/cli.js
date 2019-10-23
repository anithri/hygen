#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaultCommand = {
    command: '$0',
    aliases: [],
    describe: false,
    builder: yargs => yargs,
    handler: yargv => {
    },
};
exports.hygenYargs = (argv) => {
    return (require('yargs/yargs'))(argv)
        .scriptName('hygen')
        .usage('$0 [global-args] GENERATOR ACTION [NAME] [param-args]')
        .version(false)
        .help('help', 'Show Help')
        .alias('help', 'h')
        .option('dry', { describe: 'Run all steps but do not generate files' })
        // .command(defaultCommand)
        .command('<generator> <action> [name]', 'generate the templates for generator action', (yargs) => {
        yargs.positional('generator', {
            describe: 'generator (_templates/myGenerator)',
            type: 'string',
        }).positional('proxy', {
            describe: 'optional proxy URL',
            type: 'string',
        });
    }, yargv => { console.log('generator action', yargv); return yargv; })
        .argv;
};
console.log(exports.hygenYargs(process.argv.slice(2)));
const walk = require('ignore-walk');
exports.availableActions = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield walk({ path: '_templates' })
        .then(files => files.reduce((actions, file) => {
        const [generator, action] = file.split('/');
        actions[generator] = actions[generator] || {};
        actions[generator][action] = true;
        return actions;
    }, {}))
        .then(f => { console.log('actions', f); return f; })
        .then(generators => Object.entries(generators).map(([generator, actions]) => `${generator}: ${Object.keys(actions).sort().join(', ')}`))
        .then(f => { console.log('generators', f); return f; });
});
console.log(exports.availableActions());
//# sourceMappingURL=cli.js.map