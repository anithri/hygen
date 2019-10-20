import { Path } from './global'



export interface IOConfig {
  path: Path
  log: (...msg: Array<any>) => void
  exec: (action: string, body: any) => string
}

export interface EnvironmentConfig {
  cwd: string
  argv: Array<string>
  configPaths: Array<string>
  templatePaths: Array<string>
  hygenIgnorePaths: Array<string>
}

export interface CliConfig {
  env: EnvironmentConfig
  io: IOConfig
}
export interface CliPartial {
  env: Partial<EnvironmentConfig>
  io: Partial<IOConfig>
}

