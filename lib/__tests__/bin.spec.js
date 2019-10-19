"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
describe('hygen executable', function () {
    /* how else to test this? */
    it('should be a function', function () {
        return fs_extra_1.default.pathExists('./src/bin.ts')
            .then(function (data) {
            expect(data).toBeTruthy();
        });
    });
});
