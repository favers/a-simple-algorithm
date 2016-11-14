'use strict';

function arrayPushAndReduce(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            array.push(i);
        }
    }
    return array.reduce(function(prev, current) {
        return prev + current;
    });
}

module.exports = arrayPushAndReduce;