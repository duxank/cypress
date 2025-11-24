// Reverse a string
const word = 'Dusan';
let reversedString = '';
reversedString = word.split('').reverse().join('');
console.log(reversedString);

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Kovac'));

// Remove duplicates from an array
let fruits = ['apple', 'banana', 'cherry', 'apple'];
console.log(fruits);
const uniqueArray = (arr) => [...new Set(arr)];
console.log(uniqueArray(fruits));

//  reverse string function
function reverseString(input) {
  const string = input;
  let reversedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }
  console.log('final string: ' + reversedString);
  return reverseString;
}

reverseString('hello');

// ===========================

function reverString(inputString) {
  let changedString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    console.log(i);
    changedString = changedString + inputString[i];
  }
  return changedString;
}

console.log(reverString('Insula'));

// ===========================
