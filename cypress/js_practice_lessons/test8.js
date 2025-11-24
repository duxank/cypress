// Note that strings are compared alphabetically:
let text1 = '20';
let text2 = '5';
let result = text1 < text2;
console.log(result);

age = NaN;
if (isNaN(age)) {
  voteable = 'Input is not a number';
  console.log(voteable);
} else {
  voteable = age < 18 ? 'Too young' : 'Old enough';
  console.log(voteable);
}
