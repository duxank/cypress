function reverseStringBuiltIn(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStringBuiltIn('Dusan'));

let word = 'Dusan';
let splitword = word.split('');
console.log(splitword);
let reverseword = splitword.reverse();
console.log(reverseword);
let joinword = reverseword.join('');
console.log(joinword);

function reverseStringLoop(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
let newword = 'Kovacevic';
console.log(reverseStringLoop(newword));

function reverseStringDK(inputString) {
  console.log('INPUT: ' + inputString);
  let reversedFinalString = '';
  console.log('REVERSED: ' + inputString);
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedFinalString = reversedFinalString + inputString[i];
    console.log('REVERSED FINAL STRING IS: ' + reversedFinalString);
  }

  console.log(reverseStringDK('Petrovic'));
}
