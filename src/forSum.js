'use strict';

function forSum(n) {
    n = n - 1;
    let sum = 0;
    for (n; n >= 0; n--) {
        (n % 3 === 0 || n % 5 === 0) ? sum += n: null;
    }
    return sum;
}

module.exports = forSum;
