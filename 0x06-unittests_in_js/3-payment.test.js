const sinn = require('sinon');
const assert = require('assert');
const {describe, it, utils} = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('validate the usage of the Utils function', function() {
    const spy = sinn.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(3.245, 5.6);
    assert(spy.calledOnce);
    spy.restore();
  });
});