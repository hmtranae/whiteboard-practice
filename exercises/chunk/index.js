// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
// 1. Create empty array to hold chunks called 'chunked'
// 2. For each element in the 'unchunked' array, 
// retrieve the last element in chunked
//      if last element does not exist or if its length is equal to chunk size
//      push new chunk into 'chunked' with current element
// else add current element into chunk

// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             last.push(element);
//         }
//     }
    
//     return chunked;
// }


// Solution 2: use slice method
// slice(startIndex, endIndex) and returns a copy everything up to endIndex
// 1. Create empty 'chunked' array
// 2. Create 'index' start at 0
// 3. While index is less than array.length
//      Push slice of length 'size' from 'array' into 'chunked'
//      Add 'size' to 'index'
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

module.exports = chunk;
