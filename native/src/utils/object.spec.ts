import {get} from './object';

describe('Object Util', () => {
  describe('get', () => {
    it('should return a value nested a few levels deep', () => {
      expect(get({abc: {foo: {bar: 'test'}}}, 'abc.foo.bar', {})).toBe('test');
    });
    it('should return a default value if the path is not found', () => {
      expect(get({abc: {foo: {bar: 'test'}}}, 'abc.foo.bar2', 'asdf')).toBe('asdf');
    });
    it('should return a default value if the passed in object is invalid', () => {
      expect(get(undefined, 'abc.foo.bar2', 'asdf')).toBe('asdf');
    });
  });
});
