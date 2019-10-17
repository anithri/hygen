import { Path } from './global'

export interface EnvironmentConfig {
  [name: string]: EnvConfig
}

export interface IOConfig {
  path?: Path
}
export interface IOContainer {
  io: IOConfig
}

export interface EnvConfig {
  cwd: string
  configPaths: Array<string>
  templatePaths: Array<string>
  hygenIgnorePaths: Array<string>
  io?: IOConfig
}
