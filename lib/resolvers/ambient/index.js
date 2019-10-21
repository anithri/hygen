"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("../yargs");
var logger_1 = require("../logger");
var fileSystem_1 = require("../fileSystem");
exports.ambientResolver = function (config) {
    return yargs_1.yargsResolver(config)
        // .then(config => console.log('afterYargs', config) || config)
        .then(logger_1.loggerResolver)
        .then(fileSystem_1.configFilesResolver)
        .then(function (config) {
        if (config.logger) {
            config.logger.debug('ambientResolver finished');
            config.logger.trace('ambientResolver', config);
        }
        return config;
    });
};
