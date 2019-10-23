"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config_1 = require("../config");
const sep = path_1.default.sep;
describe(`config lookup with separator '${sep}'`, () => {
    if (process.platform !== 'win32') {
        it('sanitizes bad "from" path', () => {
            const p = config_1.configLookup('.myconfig', 'foo').find(f => f.match(/foo\/\.myconfig/));
            expect(p).toBeDefined();
        });
        it('looks up configuration upwards', () => {
            expect(config_1.configLookup('.myconfig', '/')).toEqual(['/.myconfig']);
            expect(config_1.configLookup('.myconfig', '/one')).toEqual([
                '/one/.myconfig',
                '/.myconfig',
            ]);
            expect(config_1.configLookup('.myconfig', '/one/one/one')).toEqual([
                '/one/one/one/.myconfig',
                '/one/one/.myconfig',
                '/one/.myconfig',
                '/.myconfig',
            ]);
            expect(config_1.configLookup('.myconfig', '/users/foo/bar/baz')).toEqual([
                '/users/foo/bar/baz/.myconfig',
                '/users/foo/bar/.myconfig',
                '/users/foo/.myconfig',
                '/users/.myconfig',
                '/.myconfig',
            ]);
        });
    }
    it('looks up windows folders', () => {
        expect(config_1.configLookup('.myconfig', 'C:\\foo\\bar\\baz', path_1.default.win32)).toEqual([
            'C:\\foo\\bar\\baz\\.myconfig',
            'C:\\foo\\bar\\.myconfig',
            'C:\\foo\\.myconfig',
            'C:\\.myconfig',
        ]);
        expect(config_1.configLookup('.myconfig', 'C:\\', path_1.default.win32)).toEqual([
            'C:\\.myconfig',
        ]);
    });
});
describe('resolver', () => {
    it('resolves closest file', () => __awaiter(void 0, void 0, void 0, function* () {
        const exists = jest.fn();
        exists.mockReturnValue(Promise.resolve(true));
        const load = jest.fn();
        load.mockReturnValue(Promise.resolve({ param: 1 }));
        const resolver = new config_1.ConfigResolver('.hygen.js', {
            none: _ => ({}),
            exists,
            load,
        });
        const config = yield resolver.resolve('/foo/bar');
        expect(config).toEqual({ param: 1 });
    }));
    it('resolves a file in the walk path', () => __awaiter(void 0, void 0, void 0, function* () {
        const exists = jest.fn(f => Promise.resolve(f === '/foo/.hygen.js'));
        const load = jest.fn();
        load.mockReturnValue(Promise.resolve({ param: 1 }));
        const resolver = new config_1.ConfigResolver('.hygen.js', {
            none: _ => ({}),
            exists,
            load,
        });
        const config = yield resolver.resolve('/foo/bar');
        expect(config).toEqual({ param: 1 });
    }));
});
describe('reversePathsToWalk({folder, path})', () => {
    it('should return an array of paths', () => {
        const folder = '/where/the/code/lives';
        const result = config_1.reversePathsToWalk({ folder, path: path_1.default });
        expect(result.length).toEqual(5);
        expect(result[2]).toEqual('/where/the');
    });
});
//# sourceMappingURL=config.spec.js.map