import 'jest-extended'
import {
  StringArrayCollapse,
  StringCollapseSpread,
  StringManipulation,
} from './utility'
import { FormatInputPathObject, ParsedPath } from 'path'
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

