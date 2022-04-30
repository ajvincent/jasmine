describe('callerFilename', function() {
  it('works', function() {
    const filename = jasmineUnderTest.getEnv().callerFilename();

    if (typeof window === 'undefined') {
      const path = require('path');
      const pattern = new RegExp(
        `\\${path.sep}spec\\${path.sep}core\\${path.sep}callerFilenameSpec.js$`
      );
      expect(filename).toMatch(pattern);
    } else {
      expect(filename).toMatch(
        /^http:\/\/[^\/]+\/__spec__\/core\/callerFilenameSpec.js$/
      );
    }
  });
});
