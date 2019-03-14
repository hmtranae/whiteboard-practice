// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1: Iterative
// function fib(n) {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];
//         result.push(a + b);
//     }
//     return result[n];
// }

// Solution 2: Recursive
// Without memoization is exponential runtime
function fib(n) {
    // if (n === 0) {
    //     return 0;
    // }

    // if (n === 1 || n === 2) {
    //     return 1;
    // }

    // change two if clauses above because only need first 2 elements
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n -2);
}

function memoize(fn) {
    // records values that we already saw 
    const cache = {};
    // I don't know many arguments I'm going to receive but put all
    // of them into an array called args
    return function(...args) {
        // if we have that value in cache, return that value
        if (cache[args]) {
            return cache[args];
        }

        // calculate that value based on function passed in and cache
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

fib = memoize(fib);

module.exports = fib;