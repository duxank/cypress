// filter(): Used to create a new array with elements that pass a condition.
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter((num) => num % 2 != 0);
console.log(oddNumbers);

// map(): Applies a function to each element of an array and returns a new array.
const numbers1 = [1, 2, 3];
const squared = numbers1.map((num) => num * num);
console.log(numbers1);
console.log(squared);

// reduce():     Reduces the array to a single value by applying a function.
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// String Manipulation:
let str = 'Hello, World!';
let upper = str.toUpperCase(); // Convert to uppercase
let substring = str.substring(0, 5); // Extract “Hello”
console.log(str);
console.log(upper);
console.log(substring);
