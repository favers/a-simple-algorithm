'use strict';

const multSilgarth = require('../src/multSilgarth');
const expect = require('chai').expect;

describe('multSilgarth', function() {
    it('当n等于10的时候应该返回23', function() {
        expect(multSilgarth(10)).to.be.equal(23);
    });
    it('当n等于20的时候应该返回78', function() {
        expect(multSilgarth(20)).to.be.equal(78);
    });
    it('当n等于100的时候应该返回2318', function() {
        expect(multSilgarth(100)).to.be.equal(2318);
    });
    it('当n等于10000的时候应该返回23331668', function() {
        expect(multSilgarth(10000)).to.be.equal(23331668);
    });
    it('当n等于45678的时候应该返回486804150', function() {
        expect(multSilgarth(45678)).to.be.equal(486804150);
    });
});
