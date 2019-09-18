// @flow
export type Logger = {
  ok: (msg: string) => void,
  notice: (msg: string) => void,
  warn: (msg: string) => void,
  err: (msg: string) => void,
  log: (msg: string) => void,
  colorful: (msg: string) => void
}
export type Prompter = {
  prompt: any => Promise<any>
}
export type RenderedAction = {
  file: string,
  attributes: Object,
  body: string
}
export type RunnerConfig = {
  exec: (sh: string, body: string) => void,
  templates: string,
  cwd: string,
  logger: Logger,
  helpers: Object,
  createPrompter: () => Prompter,
  hooks: ConfigHooks,

}

export type HygenVars = {
  config: RunnerConfig,
  params: Object,
  generator: Generator
}

export type HygenHook = (hygenVars: HygenVars) => HygenVars

export type Generator = {
  generator: string,
  action: string,
  subaction: string,
  path: string,
  paramHooks: Array<HygenHook>,
  templates: Array<string>
}

export type Hooks = {
  postConfig: Array<HygenHook>,
  preGenerator: Array<HygenHook>,
  postGenerator: Array<HygenHook>,
  preParams: Array<HygenHook>,
  postParams: Array<HygenHook>,
  preTemplates: Array<HygenHook>,
  postTemplates: Array<HygenHook>,
  preRender: Array<HygenHook>,
  postRender: Array<HygenHook>,
}

export type ResolverIO = {
  exists: string => Promise<boolean>,
  load: string => Promise<Object>,
  none: string => Object
}

export type ActionResult = any

export type RunnerResult = {
  success: boolean,
  time: number,
  actions: Array<ActionResult>,
  failure?: {
    message: string,
    availableActions: Array<string>
  }
}

export type WalkDirUpParams = {
  startDir#
}
