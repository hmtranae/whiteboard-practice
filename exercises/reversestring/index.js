// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// stephen recommends avoiding the typical for loop that I usually see/use

function reverse(str) {
    let reversed = '';

    // use instead for...of
    for (let char of str) {
        // temporable variable char changes through the iterable object
        reversed = char + reversed;
    }

    return reversed;
}

// function reverse(str) {
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }

// function reverse(str) {
//     // split to turn into array, reverse and then turn back into str using join
//     return str.split('')
//         .reverse()
//         .join('');
// }

// turn str into an array and then call reduce helper
// reduce takes diff values in an array and condense them into one
// function reverse(str) {
//     return str.split('').reduce((curr, acc) => acc + curr, '');
// }

// to use debugger, need to call the function
// go to dir and run node inspect index.js
// c to continue and repl to inspect elements

module.exports = reverse;
