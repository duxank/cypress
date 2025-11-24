//  1) reverse string
const string = 'dusan';
console.log('initial string: ' + string);

let reversedString = '';
// console.log(string.length);

for (let i = string.length - 1; i >= 0; i--) {
  //   console.log(i);
  reversedString = reversedString + string[i];
  //   console.log(reversedString);
}

console.log('final string: ' + reversedString);

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

// 2) 2. Reverse the words in a sentence
// Given "I love JS", return "JS love I".
// Focus: split(), reverse(), join().

const sentence = 'I love JS';
let reveresedSentence = '';
let words = sentence.split(' ');
console.log(words);

console.log(sentence.split(' ').reverse().join(' '));

function reverseWords(inputWord) {
  const sentence = inputWord;
  let reveresedSentence = '';
  let words = sentence.split(' ');
  reveresedSentence = sentence.split(' ').reverse().join(' ');
  return reveresedSentence;
}

reverseWords('I love JS');
console.log(
  'we are testing reversing words in a sentence: ' + reverseWords('I love JS')
);

// 4. Remove duplicates from an array
// Given: [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]
// One of the top recurring coding tasks for QA candidates.

// 5. Find the largest number in an array
// Input: [3, 7, 2, 9] → 9

// 6. Count occurrences of characters in a string
// Input: "banana"
// Output: { b:1, a:3, n:2 }
// Focus: loops, objects, basic logic.

// 12. Write a function that returns only even numbers
// Input: [1,2,3,4,5,6] → [2,4,6]

// 14. Capitalize the first letter of each word
// Input: "hello world" → "Hello World"


// Reverse a string

