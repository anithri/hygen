"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("../cli");
describe('hygenYargs(argv: Array<string>): object', () => {
    it('should be a function', function () {
        expect(typeof cli_1.hygenYargs).toBe('function');
    });
    it('should return an object', () => {
        const argv = ['do', 'this', 'thing', '--now', '--please'];
        const result = cli_1.hygenYargs(argv);
        expect(result).toEqual({
            "$0": 'hygen',
            '_': ['do', 'this', 'thing'],
            now: true,
            please: true
        });
    });
});
//# sourceMappingURL=cli.spec.js.map