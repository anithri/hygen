import {loggerResolver} from '../index'

describe('logger', () => {
  it('should be a function', () => {
    expect(loggerResolver).toBeFunction()
  })
})
