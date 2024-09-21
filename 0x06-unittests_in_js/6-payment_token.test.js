const { expect } = require('chai');
const {describe, it} = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('returned a resolve promise if success is true', function(done) {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({data: 'Successful response from the API'});
      done();
    });
  });
});
