"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hygenOptions = {
    tmpls: {
        array: true,
        describe: 'directory to templates dir',
        default: ['_templates'],
        hidden: true,
        global: true,
    },
    hygenignore: {
        array: true,
        describe: 'filename for .hygenignore files',
        default: ['.hygenignore'],
        hidden: true,
        global: true,
    },
    configFiles: {
        array: true,
        describe: 'filename to search for config files with',
        default: ['.hygen.js'],
        hidden: true,
        global: true,
    },
    configPath: {
        describe: 'specific config files to load as .hygen.js files',
        default: [],
        hidden: true,
        global: true,
    },
    templateFile: {
        describe: 'files to be loaded from template dir',
        array: true,
        hidden: true,
        global: true,
        default: ['index.js', 'params.js', 'help.js'],
    },
};
