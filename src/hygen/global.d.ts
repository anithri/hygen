import 'jest-extended'
import { StringArrayCollapse, StringManipulation } from './utility'
import { FormatInputPathObject, ParsedPath } from 'path'

export interface Path {
  normalize: StringManipulation
  join: StringArrayCollapse
  resolve: StringArrayCollapse
  isAbsolute: (path: string) => boolean
  relative: (from: string, to: string) => string
  dirname: StringArrayCollapse
  basename: (p: string, ext?: string) => string
  extname: StringManipulation
  format: (pathObject: FormatInputPathObject) => string;
  parse: (s: string) => ParsedPath
}
