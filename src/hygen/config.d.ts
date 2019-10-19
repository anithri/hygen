import { EnvironmentConfig, IOConfig } from './environments'

export interface HygenConfig {
  io: Partial<IOConfig>
  env: Partial<EnvironmentConfig>
}