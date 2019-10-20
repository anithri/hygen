import { EnvironmentConfig, IOConfig } from './environments'
import { Logger } from '../utils/Logger'

export interface HygenConfig {
  io: IOConfig
  env: EnvironmentConfig
  logger?: Logger
  params?: object
  yargv?: object
}
