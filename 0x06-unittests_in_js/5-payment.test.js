const sinon = require('sinon');
const assert = require('assert');
const {describe, it, utils, beforeEach, afterEach} = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, "log");
  });

  afterEach(() => {
    spy = sinon.restore();
  });

  it('case1:Verify that the console  args(100, 20)', function() {
    sendPaymentRequestToApi(100, 20);
    assert(spy.withArgs("The total is: 120").calledOnce);
  });

  it('case2:Verify that the console  args(10, 10)', function() {
    sendPaymentRequestToApi(10, 10);
    assert(spy.withArgs("The total is: 20").calledOnce);
  });
});
