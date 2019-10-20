"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("../yargs");
var logger_1 = require("../logger");
exports.ambientResolver = function (config) {
    return yargs_1.yargsResolver(config)
        // .then(config => console.log('afterYargs', config) || config)
        .then(logger_1.loggerResolver)
        .then(function (config) {
        console.log('afterLogger', config);
        return config;
    });
};
