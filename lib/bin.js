#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('bin1');
var cli_1 = require("./cli");
var environments_1 = require("./environments");
console.log('bin2');
/* The environment is of CliConfig type and describes
 * basic environmental functions and data.
 */
cli_1.cli(environments_1.environmentFor('linux'));
console.log('bin3');
