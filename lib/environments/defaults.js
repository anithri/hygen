"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* The environment contains all of the details of the running environment
*  including current directory, the default and environment specific paths
*  and io functions */
exports.defaults = {
    env: {
        cwd: process.cwd(),
        argv: process.argv.slice(2),
        configPaths: ['./.hygen.js'],
        templatePaths: ['./_templates'],
        hygenIgnorePaths: ['.hygenignore'],
    },
    io: {
        log: function () {
            var msg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msg[_i] = arguments[_i];
            }
            return console.log.apply(console, msg);
        }
    },
};
