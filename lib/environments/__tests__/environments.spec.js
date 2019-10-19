"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('environments = {linux: {...}}', function () {
    it('should be an object with a linux key', function () {
        expect(index_1.environments).toContainKeys(['linux', 'defaults']);
    });
    describe('defaults', function () {
        var defaults = index_1.environments.defaults;
        it('should have required keys', function () {
            expect(defaults).toContainKeys(['env', 'io']);
        });
    });
    describe('linux', function () {
        var linux = index_1.environments.linux;
        it('should have required keys', function () {
            expect(linux).toContainKeys(['env', 'io']);
        });
    });
});
