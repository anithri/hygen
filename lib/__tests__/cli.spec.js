"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli_1 = require("../cli");
describe('cli(env)', function () {
    it('should be a function', function () {
        expect(cli_1.cli).toBeFunction();
    });
});
