'use strict';

function multSilgarth(n) {
    let threes = Math.floor(--n / 3);
    let fives = Math.floor(n / 5);
    let fifteen = Math.floor(n / 15);
    
    return (3 * threes * (threes + 1) + 5 * fives * (fives + 1) - 15 * fifteen * (fifteen + 1)) / 2;
}

module.exports = multSilgarth;
