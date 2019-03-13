function anagrams(stringA, stringB) {
    mapStringA = {};
    mapStringB = {};

    for (let char of stringA.replace(/[^\w]/g, '').toLowerCase().split('')) {
        mapStringA[char] = mapStringA[char] + 1 || 1; 
    }

    for (let char of stringB.replace(/[^\w]/g, '').toLowerCase().split('')) {
        mapStringB[char] = mapStringB[char] + 1 || 1;
    }

    console.log(mapStringA);
    console.log(mapStringB);
}

anagrams('hello there', 'bye there');
