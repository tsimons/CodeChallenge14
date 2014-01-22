// Write your tests below

describe('countDown function', function () {
  it('should return a string of numbers', function () {
      expect(countDown(5)).toBe('bar 4 foo 2 1 0');
      expect(countDown(15)).toBe('foobar 14 13 foo 11 bar foo 8 7 foo bar 4 foo 2 1 0');
      expect(countDown(20)).toBe('bar 19 foo 17 16 foobar 14 13 foo 11 bar foo 8 7 foo bar 4 foo 2 1 0');
  });

  it('should return an error', function () {
      expect(countDown(-1)).toBe('Error: Please use a positive number');
  });
});