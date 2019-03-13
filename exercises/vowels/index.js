// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str.toLowerCase().split('').reduce((acc, curr) => {
//         if (vowels.indexOf(curr) !== -1) {
//             acc += 1;
//         }
//         return acc;
//     }, 0)
// }

// function vowels(str) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     // const checker = 'aeiou';
//     for (let char of str.toLowerCase()) {
//         // if (vowels.indexOf(char) !== -1) {
//            if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// Solution 2 using regular expressions
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    // matches return of matches if there are or null if none
    return matches ? matches.length : 0
}

module.exports = vowels;
