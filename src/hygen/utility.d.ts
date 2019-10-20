import { StringMap } from './global'

export interface LogMap {
  name: string
  level: number
  formatter: LogMessage
}

export interface ChalkMapping {
  [S: string]: LogMap
}
export declare type LogMessage = (...msg: any[]) => void

export declare interface LogYargs {
  logLevel?: number
  silent?: boolean
  error?: boolean
  quiet?: boolean
  warn?: boolean
  debug?: boolean
  trace?: boolean
}
