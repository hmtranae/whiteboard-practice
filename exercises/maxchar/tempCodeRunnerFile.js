function maxChar(str) {
    let obj = {};
    let mostFreqChar = str[0];
    
    for (char of str) {
        // if (obj.hasOwnProperty(char)) {
        //     obj[char]++;
        // }
        // else {
        //     obj[char] = 1;
        // }
        obj[char] = obj[char] + 1 || 1;
    }

    for (key in obj) {
        if (obj[key] > obj[mostFreqChar]) {
            mostFreqChar = key;
        }
    }

    return mostFreqChar;
}

console.log(maxChar('aaaaaaaaa bb ccccccccccccccc!'))
