
// const add = function (a, b) {
//     return a + b
// }

// const display = function (value) {
//     console.log("The content is ", value);
// }
// const display2 = function (value) {
//     console.log("The content was ", value);
// }

// a = 2;
// b = 4;

// const addAndDisplay = function (a, b, callback) {
//     const result = add(a, b)
//     callback(result)
// }

// addAndDisplay(a, b, display);
// addAndDisplay(a, b, display2);
// addAndDisplay(2, 4, value => console.log("The content is ", value))

// // value => console.log("The content is ", value);


// // // const passOrFail2 = marks => marks >= 60 ? "PASS" : "FAIL"

// // console.log(`You ${passOrFail2(55)}`);


// // console.log(2, "+", 4, "is", add(a, b));


const numbers = [1, 2, -3, 4, -5, 6]

// numbers.forEach(ele => console.log(ele))
// numbers.map(ele => ele * ele)
//     .forEach(ele => console.log(ele))


// console.log(numbers.filter(ele => ele > 1000));
// console.log(numbers.find(ele => ele == 60))

// forEach
// map
// filter
// reduce
// find
// some
// every
// sort
// splice


// const numbers = [1, 2, -3, 4, -5, 6]
acc = 1
for (const ele of numbers) {
    acc *= ele
}

console.log(numbers.reduce((acc, ele) => acc * ele, 1));

// create five students object with name and age
const students = [
    { name: "A", age: 2 },
    { name: "B", age: 17 },
    { name: "C", age: 22 },
    { name: "D", age: 23 },
    { name: "E", age: 10 },
]

const underAges = students.filter(student => student.age < 18)
console.log(underAges);

const namesOfUnderAges = underAges.map(student => student.name)
console.log(namesOfUnderAges);

// first round it will

// acc = 0, ele = 1
// acc = acc + ele = 1
// acc = 1, ele = 2
// acc = acc + ele = 3
// acc = 3, ele = -3
// acc = acc + ele = 0
// acc = 0, ele = 4













