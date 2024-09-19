const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 5 when adding 1 and 3.7', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 6 when adding 2.57099 and 3.1054', function() {
    assert.equal(calculateNumber(2.57099, 3.1054), 6);
  });

  it('should return 7 when adding 2.57099 and 3.6054', function() {
    assert.equal(calculateNumber(2.57099, 3.6054), 7);
  });

  it('should return 6 when adding 2.47099 and 3.6054', function() {
    assert.equal(calculateNumber(2.47099, 3.6054), 6);
  });

  it('should return 7 when adding 2.57099 and 7', function() {
    assert.equal(calculateNumber(2.57099, 7), 10);
  });
});
