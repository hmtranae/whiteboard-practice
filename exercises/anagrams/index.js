// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Regular expression example
const word = 'HI THERE!!!!!!';
console.log(word.replace(/[^\w]/g, "").toLowerCase());

// Gotchas: compare length of each string first to see which char map to use as ref

// function anagrams(stringA, stringB) {
//     mapStringA = createCharMap(stringA);
//     mapStringB = createCharMap(stringB);

//     return compareCharMap(mapStringA, mapStringB)
// }

// function createCharMap(string) {
//     const charMap = {};
//     for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1; 
//     }
//     return charMap;
// }

// function compareCharMap(mapA, mapB) {
//     const aProps = Object.getOwnPropertyNames(mapStringA);
//     const bProps = Object.getOwnPropertyNames(mapStringB);
//     if (aProps.length !== bProps.length) {
//         return false;
//     }
//     for (let prop of aProps) {
//         if (mapA[prop] !== mapB[prop]) {
//             return false;
//         }
//     }
//     return true;
// }

// Solution 2 with performance analysis
// Array.prototype.sort
function anagrams(stringA, stringB) {
    return sortString(stringA) === sortString(stringB);
}

function sortString(string) {
    return string
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = anagrams;
