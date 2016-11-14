'use strict';

function whileSum(n) {
    let sum = 0;
    while (n >= 1) {
        n--;
        if (n % 3 === 0 || n % 5 === 0) {
            sum += n;
        }
    }
    return sum;
}

module.exports = whileSum;
