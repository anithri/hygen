import { EnvironmentConfig, IOConfig } from './environments'
import { Logger } from './utility'

export interface HygenConfig {
  io: IOConfig
  env: EnvironmentConfig
  logger?: Logger
  params?: object
  yargv?: object
}
