import { Path } from './global'


export interface IOConfig {
  path?: Path
  exec?: (action: string, body: any) => string
}
export interface IOContainer {
  io: IOConfig
}

export interface EnvironmentConfig {
  cwd: string
  argv: Array<string>
  configPaths?: Array<string>
  templatePaths?: Array<string>
  hygenIgnorePaths?: Array<string>
}

export interface CliConfig {
  env: EnvironmentConfig | {}
  io: IOConfig | {}
}

export interface CliPartials {
  [s: string]: CliConfig
}
