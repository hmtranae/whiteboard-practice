
function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((acc, curr) => {
        console.log(curr)
        if (vowels.indexOf(curr) !== -1) {
            acc += 1
        }
        return acc;
    }, 1)
}

console.log(vowels('Hi there'))
