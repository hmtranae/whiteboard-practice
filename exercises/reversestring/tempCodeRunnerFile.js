function reverse(str) {
    return str.split('').reduce((curr, acc) => {
        return acc + curr; 
    });
}

console.log(reverse('abc'))
