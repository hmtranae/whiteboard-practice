// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Math.sign(x): 1 if pos, -1 if neg
// toString to change num to string
// parseInt changes str to num

function reverseInt(n) {
    let reverseInt = parseInt(n.toString()
        .split('')
        .reverse()
        .join(''))
    // return n >= 0 ? reverseInt : reverseInt * -1;
    return reverseInt * Math.sign(n);
}

module.exports = reverseInt;
