import { EnvConfig ,EnvironmentConfig } from 'hygen'
import path from 'path'

/* The environment contains all of the details of the running environment
*  including current directory, the default and environment specific paths
*  and io functions */

export const linux: EnvConfig = {
  io: {
    path: path,
    exec: (action: string | Array<String>, body: string): void => {

    }
  }
}

