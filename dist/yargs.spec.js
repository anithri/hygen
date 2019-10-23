"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = require("../yargs");
describe('hygenYargs(argv: Array<string>): object', () => {
    it('should be a function', function () {
        expect(typeof yargs_1.hygenYargs).toBe('function');
    });
    it('should return an object', () => {
        const argv = ['do', 'this', 'thing', '--now', '--please'];
        const result = yargs_1.hygenYargs(argv);
        expect(result).toEqual({
            "$0": 'hygen',
            '_': ['do', 'this', 'thing'],
            now: true,
            please: true
        });
    });
});
//# sourceMappingURL=yargs.spec.js.map