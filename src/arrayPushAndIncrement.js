'use strict';

function arrayPushAndIncrement(n) {
    let array = [],
        result = 0;

    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            array.push(i);
        }
    }

    for (let num of array) {
        result += num;
    }
    return result;
}

module.exports = arrayPushAndIncrement;