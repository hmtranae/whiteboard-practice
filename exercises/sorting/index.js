// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// walk through array swapping adjacent elements based on value and do until sorted
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }  
        if (i !== indexOfMin) {
            // let temp = arr[i];
            // arr[i] = arr[indexOfMin];
            // arr[indexOfMin] = temp;
            swap(arr, indexOfMin, i);
        }
    }
    return arr;
}

function swap(arr, indexOfMin, i) {
    let temp = arr[i];
    arr[i] = arr[indexOfMin];
    arr[indexOfMin] = temp;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
