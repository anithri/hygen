import {Arguments} from 'yargs'
import { YargsOptions } from '../../hygen/resolver'

export const loggerOptions: YargsOptions = {
  silent: {
    alias: 's',
    describe: 'no output except exit code',
    type: 'boolean',
    conflicts: ['quiet', 'error', 'warn', 'info', 'debug', 'trace'],
    group: 'Visibility',
    hidden: true,
    global: true,
  },
  quiet: {
    alias: ['q'],
    describe: 'no output except errors',
    type: 'boolean',
    conflicts: ['silent', 'warn', 'info', 'debug', 'trace'],
    group: 'Visibility',
    hidden: true,

    global: true,
  },
  warn: {
    alias: ['w'],
    describe: 'no output except errors and warnings',
    type: 'boolean',
    conflicts: ['silent', 'error', 'info', 'debug', 'trace'],
    group: 'Visibility',
    global: true,
  },
  verbose: {
    alias: ['v'],
    describe: 'standard plus output',
    type: 'boolean',
    conflicts: ['silent', 'error', 'warn', 'debug', 'trace'],
    group: 'Visibility',
    global: true,
  },
  debug: {
    alias: '-vv',
    describe: 'all of the output and short traces',
    type: 'boolean',
    conflicts: ['silent', 'error', 'warn', 'info', 'trace'],
    group: 'Visibility',
    global: true,
  },
  trace: {
    alias: 'vvv',
    describe: 'all of the output and traces',
    type: 'boolean',
    conflicts: ['silent', 'error', 'warn', 'info', 'debug'],
    group: 'Visibility',
    hidden: true,

    global: true,
  },
}