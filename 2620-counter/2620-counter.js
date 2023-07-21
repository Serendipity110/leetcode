/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let current = n;
    return function() {
        const res = current;
        current++;
        return res;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */