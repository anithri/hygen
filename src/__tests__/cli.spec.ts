import {hygenYargs} from '../cli'

describe('hygenYargs(argv: Array<string>): object', () => {
  it('should be a function', function() {
    expect(typeof hygenYargs).toBe('function')
  })
  it('should return an object', () => {
    const argv = ['do', 'this', 'thing', '--now', '--please']
    const result = hygenYargs(argv)

    expect(result).toEqual({
      "$0": 'hygen',
      '_': ['do','this','thing'],
      now: true,
      please: true
    })
  })
})