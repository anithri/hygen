"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('logger', function () {
    it('should be a function', function () {
        expect(index_1.loggerResolver).toBeFunction();
    });
});
