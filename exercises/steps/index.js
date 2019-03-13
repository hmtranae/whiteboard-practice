// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i) + ' '.repeat(n - i))
//     }
// }

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//     }
// }

// Recursive Solution
// 1. Figure out the bare minimum pieces of info to represent your problem
// 2. Give reasonable defaults to the bare minimum pieces of info
// 3. Check base case. Is there any other work to do? If not, return
// 4. Do some work. Call function again, make sure arguments have changed somehow

// Observations for recursion
// If row === n then base case and stop
// If stair string has length === n then log
// If length of stair string is less than or equal to row number then add '#' otherwise add space
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}

module.exports = steps;
