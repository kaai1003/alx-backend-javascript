const sinon = require('sinon');
const assert = require('assert');
const {describe, it, utils} = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('validate the usage of the Utils function', function() {
    const spy = sinon.spy(console, "log");
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    sendPaymentRequestToApi(100, 20);
    assert(spy.withArgs("The total is: 10").calledOnce);
    assert(stub.withArgs('SUM', 100, 20).calledOnce);
    spy.restore();
    stub.restore();
  });
});
