// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Similar problems to this
// 1. What is the most common char in the string?
// 2. Does string A have the same characters as string B (is it an anagram?)
// 3. Does the given string have any repeated chars in it?
// Any question about comparing two strings or counting num of chars in a given string

// Convert any given string to an object where the key is the char and the value is the number of times it appears
// Great for validation or count of chars in a string

function maxChar(str) {
    let obj = {};
    let mostFreqChar = str[0];
    

    // use for..of to loop through an array or iterable
    for (let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    // use for..in for objects
    for (key in obj) {
        if (obj[key] > obj[mostFreqChar]) {
            mostFreqChar = key;
        }
    }

    return mostFreqChar;
}

console.log(maxChar('aaaaaaaaa bb ccccccccccccccc!'))

module.exports = maxChar;
