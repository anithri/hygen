#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli_1 = require("./cli");
var environments_1 = require("./environments");
/* The environment is of CliConfig type and describes
 * basic environmental functions and data.
 */
cli_1.cli(environments_1.environmentFor('linux'));
