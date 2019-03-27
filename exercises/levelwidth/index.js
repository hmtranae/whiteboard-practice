// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let array = [root, 'stop'];
    let counterArray = [0];
    while (array.length > 1) {
        // if first ele is not 'first'
        if (array[0] !== 'stop') {
            let node = array.shift();
            array.push(...node.children);
            counterArray[counterArray.length - 1] ++;
        } else {
            // if first ele is 'first'
            array.push(array.shift());
            counterArray.push(0);
        }
    }
    return counterArray;
}

// [1, 2, 3, 'stop']
// [1, ]

module.exports = levelWidth;
