"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import path from 'path'
var path = require('path');
/* The environment contains all of the details of the running environment
 *  including current directory, the default and environment specific paths
 *  and io functions */
exports.linux = {
    env: {},
    io: {
        path: path,
        exec: function (action, body) {
            var opts = body && body.length > 0 ? { input: body } : {};
            return require('execa').shell(action, opts);
        },
    },
};
