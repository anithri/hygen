#!/usr/bin/env node
import { cli } from './cli'
import environments from './env'

cli(environments.linux)
