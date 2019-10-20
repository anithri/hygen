import 'jest-extended'
import { FormatInputPathObject, ParsedPath } from 'path'

export type StringManipulation = (s: string) => string
export type StringArrayCollapse = (arr: Array<string>) => string
export type StringCollapseSpread = (...paths: Array<string>) => string

export type StringMap = Record<string,string>

export interface Path {
  normalize: StringManipulation
  join: StringCollapseSpread
  resolve: StringArrayCollapse
  isAbsolute: (path: string) => boolean
  relative: (from: string, to: string) => string
  dirname: StringArrayCollapse
  basename: (p: string, ext?: string) => string
  extname: StringManipulation
  format: (pathObject: FormatInputPathObject) => string;
  parse: (s: string) => ParsedPath
}

