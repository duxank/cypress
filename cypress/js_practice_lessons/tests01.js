const a = 202;

if (a < 5) {
  // code to execute if the condition is true
  console.log('Condition is true..');
} else {
  // code to execute if the condition is false
  console.log('Condition is false..');
}

if (a < 5) {
  // code to execute if condition1 is true
} else if (a < 6) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}

hour = 20;

if (hour < 18) {
  greeting = 'Good day';
  console.log(greeting);
}

let age = 16;
let text = 'You can Not drive';

if (age >= 18) {
  text = 'You can drive';
}
console.log(text);

let ageNum = 21;
let textprint = ageNum < 18 ? 'Minor' : 'Adult';
console.log(textprint);

let isMember = false;
let discount = isMember ? 0.2 : 0;
console.log(discount);
