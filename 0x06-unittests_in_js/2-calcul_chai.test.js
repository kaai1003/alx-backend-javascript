const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('type === "SUM"', function() {
    it('should return 5 for SUM of 1 + 3.7', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
  
    it('should return 4 for SUM of -1 + 3.7', function() {
      expect(calculateNumber('SUM', -1, 3.7), 3);
    });
  
    it('should return -5 for SUM of -1 + (-3.7)', function() {
      expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
    });
  
    it('should return 6 for SUM of 1.5 + 3.7', function() {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });
  
  describe('type === "SUBTRACT"', function() {
    it('should return 0 for SUBTRACT of 2.57099 - 3.1054', function() {
      expect(calculateNumber('SUBTRACT', 2.57099, 3.1054)).to.equal(0);
    });

    it('should return 1 for SUBTRACT of 3.6054 - 2.57099', function() {
      expect(calculateNumber('SUBTRACT', 2.57099, 3.6054)).to.equal(-1);
    });

    it('should return -1 for SUBTRACT of (-3.6054) - (-2.57099)', function() {
      expect(calculateNumber('SUBTRACT', -2.57099, -3.6054)).to.equal(1);
    });

    it('should return 7 for SUBTRACT of (-3.6054) - 2.57099', function() {
      expect(calculateNumber('SUBTRACT', 2.57099, -3.6054)).to.equal(7);
    });

    it('should return 7 for SUBTRACT of 0.57099 - 3.2054', function() {
      expect(calculateNumber('SUBTRACT', 3.2054 , 0.57099)).to.equal(2);
    });
  });

  describe('type === "DIVIDE"', function() {
    it('should return 0.5 for DIVIDE of 2.47099 / 3.6054', function() {
      expect(calculateNumber('DIVIDE', 2.47099, 3.6054)).to.equal(0.5);
    });

    it('should return Error for DIVIDE of 2.57099 / 0.232', function() {
      expect(calculateNumber('DIVIDE', 2.57099, 0.232)).to.equal('Error');
    });

    it('should return 3 for DIVIDE of 2.57099 / 0.532', function() {
      expect(calculateNumber('DIVIDE', 2.57099, 0.532)).to.equal(3);
    });

    it('should return 0 for DIVIDE of 0.17099 / 3', function() {
      expect(calculateNumber('DIVIDE', 0.17099, 3)).to.equal(0);
    });

    it('should return Error for DIVIDE of 0 / 0.132', function() {
      expect(calculateNumber('DIVIDE', 0, 0.132)).to.equal('Error');
    });
  });
});
