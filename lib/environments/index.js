"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var defaults_1 = require("./defaults");
var linux_1 = require("./linux");
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
    return __assign(__assign({}, exports.environments.defaults), exports.environments[name]);
};
