#!/usr/bin/env node
import { cli } from './cli'
import { environments } from './environments'

cli(environments.linux)
