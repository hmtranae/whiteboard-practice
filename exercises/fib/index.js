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
function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    }
    return result[n];
}

// Solution 2: Recursive
// function fib(n) {
//     // if (n === 0) {
//     //     return 0;
//     // }

//     // if (n === 1 || n === 2) {
//     //     return 1;
//     // }

//     // change two if clauses above because only need first 2 elements
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n -2);
// }

module.exports = fib;
