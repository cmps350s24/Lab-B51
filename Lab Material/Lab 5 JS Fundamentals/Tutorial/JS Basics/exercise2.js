const matrix = [[2, 3], [34, [89]], [55, 101, 346], [34, 89, 34, 99]]

const flatten = matrix.flat(Infinity)
console.log(flatten);

// maximum
const max = flatten.reduce((acc, b) => acc > b ? acc : b)

const max2 = flatten.reduce((acc, b) => Math.max(acc, b))
console.log(max);
console.log(max2);
console.log(Math.max(...flatten));


// sorting

console.log(flatten.sort((a, b) => a - b));

// square

console.log(flatten.map(ele => ele ** 2));

const howManyElements = flatten.length
const avg = flatten.reduce((acc, b) => acc + b) / flatten.length

console.log(avg);

console.log([...new Set(flatten)]);

// end
flatten.push(44)
flatten.pop()

// add begining
flatten.shift()
flatten.unshift(44)

// splice
console.log(flatten.splice(0, 3));