export interface EnvConfig {
  cwd: string
  configPaths: Array<string>
  templatePaths: Array<string>
  hygenIgnorePaths: Array<string>
}

export interface EnvironmentConfig {
  [name: string]: EnvConfig
}
