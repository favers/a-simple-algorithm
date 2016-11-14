'use strict';

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const arrayPushAndIncrement = require('./arrayPushAndIncrement');
const arrayPushAndReduce = require('./arrayPushAndReduce');
const whileLoopArrayReduce = require('./whileLoopArrayReduce');
const whileSum = require('./whileSum');

suite.add('arrayPushAndIncrement', function() {
        arrayPushAndIncrement(45678);
    })
    .add('arrayPushAndReduce', function() {
        arrayPushAndReduce(45678);
    })
    .add('whileLoopArrayReduce', function() {
        whileLoopArrayReduce(45678);
    })
    .add('whileSum', function() {
        whileSum(45678);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });
