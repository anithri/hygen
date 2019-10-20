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
var Logger_1 = require("../../utils/Logger");
exports.loggerResolver = function (config) {
    console.log('loggerResolver', config);
    return Promise.resolve(__assign(__assign({}, config), { logger: new Logger_1.Logger(config.io.log, config.yargv) }))
        .then(function (config) {
        return config;
    });
};
