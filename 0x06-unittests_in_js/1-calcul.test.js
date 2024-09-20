const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('type === "SUM"', function() {
    it('should return 5 for SUM of 1 + 3.7', function() {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
  
    it('should return 4 for SUM of -1 + 3.7', function() {
      assert.equal(calculateNumber('SUM', -1, 3.7), 3);
    });
  
    it('should return -5 for SUM of -1 + (-3.7)', function() {
      assert.equal(calculateNumber('SUM', -1, -3.7), -5);
    });
  
    it('should return 6 for SUM of 1.5 + 3.7', function() {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });
  
  describe('type === "SUBTRACT"', function() {
    it('should return 0 for SUBTRACT of 2.57099 - 3.1054', function() {
      assert.equal(calculateNumber('SUBTRACT', 2.57099, 3.1054), 0);
    });

    it('should return 1 for SUBTRACT of 3.6054 - 2.57099', function() {
      assert.equal(calculateNumber('SUBTRACT', 2.57099, 3.6054), 1);
    });

    it('should return -1 for SUBTRACT of (-3.6054) - (-2.57099)', function() {
      assert.equal(calculateNumber('SUBTRACT', -2.57099, -3.6054), -1);
    });

    it('should return 7 for SUBTRACT of (-3.6054) - 2.57099', function() {
      assert.equal(calculateNumber('SUBTRACT', 2.57099, -3.6054), -7);
    });

    it('should return 7 for SUBTRACT of 0.57099 - 3.2054', function() {
      assert.equal(calculateNumber('SUBTRACT', 3.2054 , 0.57099), -2);
    });
  });

  describe('type === "DIVIDE"', function() {
    it('should return 0.5 for DIVIDE of 2.47099 / 3.6054', function() {
      assert.equal(calculateNumber('DIVIDE', 2.47099, 3.6054), 0.5);
    });

    it('should return Error for DIVIDE of 2.57099 / 0.232', function() {
      assert.equal(calculateNumber('DIVIDE', 2.57099, 0.232), 'Error');
    });

    it('should return 3 for DIVIDE of 2.57099 / 0.532', function() {
      assert.equal(calculateNumber('DIVIDE', 2.57099, 0.532), 3);
    });

    it('should return 0 for DIVIDE of 0.17099 / 3', function() {
      assert.equal(calculateNumber('DIVIDE', 0.17099, 3), 0);
    });

    it('should return Error for DIVIDE of 0 / 0.132', function() {
      assert.equal(calculateNumber('DIVIDE', 0, 0.132), 'Error');
    });
  });
});
