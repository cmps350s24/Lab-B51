console.log("Hello world");

const numbers = [1, 2, 3, 4, -4, 0 - 5]

// const [first, second, third, ...remaining] = numbers.sort((a, b) => b - a); 


function decide(max, num) {
    console.log(`$max = ${max}, num = ${num}`);
    return max > num ? max : num
}



function sum(previousSum, newNum) {
    return previousSum + newNum
}

(previousSum, newNum) => previousSum + newNum

const theMax = numbers.reduce((max, num) => max > num ? max : num)
const theSUm = numbers.reduce((acc, curr) => acc + curr)
console.log("The Max ", theMax);
console.log("The SUm", theSUm);


// let max = numbers[0];
// for (let num of numbers) {
//     max = decide(num, max)
// }

// console.log(max);