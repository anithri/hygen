import { YargsOptions } from '../../hygen/resolver'

export const hygenOptions: YargsOptions = {
   tmpls:  {
      array: true,
      describe: 'directory to templates dir',
      default: ['_templates'],
      hidden: true,
      global: true,
      group: 'Hygen Options',
    },
   hygenignore:  {
      array: true,
      describe: 'filename for .hygenignore files',
      default: ['.hygenignore'],
      hidden: true,
      global: true,
      group: 'Hygen Options',
    },
   configFiles:  {
      array: true,
      describe: 'filename to search for config files with',
      default: ['.hygen.js'],
      hidden: true,
      global: true,
      group: 'Hygen Options',
    },
   configPath:  {
      describe: 'specific config files to load as .hygen.js files',
      default: [],
      hidden: true,
      global: true,
      group: 'Hygen Options',
    },
   templateFile:  {
      describe: 'files to be loaded from template dir',
      array: true,
      hidden: true,
      global: true,
      group: 'Hygen Options',
      default: ['index.js', 'params.js', 'help.js'],
    },
   }