#!/usr/bin/env node
console.log('bin1')
import { cli } from './cli'
import { environmentFor } from './environments'
console.log('bin2')
/* The environment is of CliConfig type and describes
 * basic environmental functions and data.
 */
cli(environmentFor('linux'))
console.log('bin3')