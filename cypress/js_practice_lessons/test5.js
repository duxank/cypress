let x = 10;
// Here x is 10
console.log(x);

{
  let x = 2;
  // Here x is 2
  console.log(x);
}

// Here x is 10
console.log(x);

{
  // Cannot redeclare block-scoped variable 'y'
  //   let y = 2; // Allowed
  //   let y = 3; // Not allowed
}

const PI = 3.14159265359;
console.log(PI);
// Cannot reassign a constant variable
// PI = 3.14; // TypeError: Assignment to constant variable.

// You can create a constant array:
const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars);
// You can change an element:
cars[0] = 'Ford';
console.log(cars);
// You can add an element:
cars.push('MG');
console.log(cars);

// You can create a const object:
const car = { type: 'Fiat', model: '500', color: 'white' };
console.log(car);
// You can change a property:
car.color = 'red';
console.log(car);
// You can add a property:
car.owner = 'Johnson';
console.log(car);
