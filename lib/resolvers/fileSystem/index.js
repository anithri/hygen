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
exports.configFilesResolver = function (config) {
    // search for hygenignore and hygen config files
    return Promise.resolve(__assign({}, config));
};
exports.configLoaderResolver = function (config) {
    return Promise.resolve(__assign({}, config));
};
exports.fileSystemResolver = function (config) {
    return exports.configFilesResolver(config)
        .then(exports.configLoaderResolver);
    // do stuff here
};
