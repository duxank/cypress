const person = {
  name: 'Alice',
  age: 25,
};

function greet() {
  console.log(`Hello, my name is ${person.name} and im  ${person.age}  old `);
}

greet();

function add(a, b) {
  return a + b;
}

const sum = (x, y) => x + y; // Arrow function
console.log(sum(1, 2));
