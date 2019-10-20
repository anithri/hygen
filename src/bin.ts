#!/usr/bin/env node
import { cli } from './cli'
import { environmentFor } from './environments'

/* The environment is of CliConfig type and describes
 * basic environmental functions and data.
 */
cli(environmentFor('linux'))
