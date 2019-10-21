"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaults_1 = require("./defaults");
var linux_1 = require("./linux");
var mergeConfig_1 = require("../utils/mergeConfig");
/* The environment contains all of the details of the running environment
 *  including current directory, the default and environment specific paths
 *  and io functions */
exports.environments = {
    defaults: defaults_1.defaults,
    linux: linux_1.linux,
};
// TODO - consider overloads
// environmentFor('name')
// environmentFor('/any/absolute/path')
// environmentsFor({custom: :environment})
exports.environmentFor = function (name) {
    return mergeConfig_1.mergeConfig(defaults_1.defaults, exports.environments[name]);
};
