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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const walk = require('ignore-walk');
exports.availableActions = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield walk({ path: '_templates' })
        .then(files => files.reduce((actions, file) => {
        const [generator, action] = file.split('/');
        actions[generator] = actions[generator] || new Set([]);
        actions[generator].add(action);
        return actions;
    }, {}))
        .then((generators) => Object.entries(generators).reduce((final, [key, entries]) => {
        final[key] = Array.from(entries);
        return final;
    }, {}));
});
// .then(f => {console.log('actions', f); return f})
// .then(generators =>
//   Object.entries(generators).map(([generator, actions]: [string, Array<string>]) =>
//     `${generator}: ${actions.sort().join(', ')}`,
//   ),
// )
// .then(f => {
//   logger.notice('generators:')
//   logger.notice(f)
//   return f
// })
exports.hygenYargs = (argv, logger) => __awaiter(void 0, void 0, void 0, function* () {
    const actions = yield exports.availableActions();
    let yargs = require('yargs/yargs')(argv)
        .scriptName('hygen')
        .version(false)
        .help('help', 'Show Help')
        .alias('help', 'h')
        .option('dry', {
        describe: 'Run all steps but do not generate files',
    })
        .command('$0 <generator> <action> [name]', 'generate the templates for generator action', (yrg) => yrg
        .positional('generator', {
        describe: 'generator (_templates/myGenerator)',
        type: 'string',
    })
        .positional('action', {
        describe: 'action (_templates/myGenerator/myAction)',
        type: 'string',
    })
        .positional('name', {
        describe: 'name for the generated templates',
        type: 'string',
    }), 
    // @ts-ignore
    (yargv) => {
        if (yargv.generator && yargv.action) {
            logger.notice(`Generator: ${yargv.generator}`);
            logger.notice(`   Action: ${yargv.action}`);
            // Start rendering the templates
            // generateActionCommands
        }
        else if (yargv.generator) {
            logger.err(`No Action for generator: ${yargv.generator}`);
            return false;
        }
        else {
            logger.err('No Generator');
            return false;
        }
        logger.notice('yargs.argv', yargv);
        return yargv;
    });
    return generateActionCommands(yargs, actions)
        .demandCommand(2)
        // @ts-ignore
        .fail((msg, err, ygs) => {
        // logger.err('Yargs msg,error:', msg, err)
        logger.warn(msg);
        ygs.showHelp();
        logger.notice('===> actionsAvailable <===');
    }).argv;
});
const generateActionCommands = (yargs, actions) => {
    Object.entries(actions).forEach(([generator, all]) => {
        all.forEach(action => {
            yargs.command(`${generator} ${action} [name]`, `It's a generator!`);
        });
    });
    return yargs;
};
const logger = new logger_1.default((...msg) => console.log(...msg));
console.log(exports.hygenYargs(process.argv.slice(2), logger));
// console.log(availableActions())
//# sourceMappingURL=cli.js.map