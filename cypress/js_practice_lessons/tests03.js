function reverseStringLoop(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
let newword = 'Kovacevic';
console.log(reverseStringLoop(newword));

function reverseStringDK(str1) {
  let reversedString1 = '';
  for (let i = str1.length - 1; i >= 0; i--) {
    reversedString1 = reversedString1 + str1[i];
    console.log('REVERSED FINAL STRING IS: ' + reversedString1);
  }
  return reversedString1;
}
let newword1 = 'Petrovic';
console.log(reverseStringDK(newword1));
