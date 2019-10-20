"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ambient_1 = require("./resolvers/ambient");
exports.cli = function (config) {
    // console.log('cli',config)
    ambient_1.ambientResolver(config)
        .then(function (config) { return console.log('finalConfig', config); });
    // gets ambient environment data
    // gets os specific functions
};
