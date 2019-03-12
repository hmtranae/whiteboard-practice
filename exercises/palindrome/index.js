// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ternary operator
// function palindrome(str) {
//     return str === str.split('').reverse().join('') ? true : false
// }

// function palindrome(str) {
//     const reversed = str
//         .split('')
//         .reverse()
//         .join('');

//     return reversed === str;
// }

// use Array.prototype.every()
// every runs a check given a function on every element in array
// returns true if every element passes, otherwise false
function palindrome(str) {
    // 'racecar' length = 7
    return str.split('').every((char, i) => char === str[str.length - (i + 1)])
}

module.exports = palindrome;
