"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("../yargs");
var logger_1 = require("../logger");
exports.ambientResolver = function (config) {
    return yargs_1.yargsResolver(config)
        .then(logger_1.loggerResolver);
};
