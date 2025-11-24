{
  let x = 2;
  console.log(x);
}
// x can NOT be used here
// ReferenceError: x is not defined
// console.log(x);

// Variables declared with varinside a { } block can be accessed from outside the block:
{
  var y = 2;
}
console.log(y);

// cannot do
// let x2 = 'John Doe';
// let x2 = 0;

var x2 = 'John Doe';
console.log(x2);
var x2 = 0;
console.log(x2);
