import { HygenConfig } from './config'
import { Options } from 'yargs'

export type ResolverFn = (config: HygenConfig) => Promise<HygenConfig>

export interface YargsOptions {
  [s: string]: Partial<Options>
}
