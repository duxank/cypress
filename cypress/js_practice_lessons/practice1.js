let luckyNum = '23';
console.log(luckyNum);

let luckyNum1;
console.log(luckyNum1);

let luckyNum2 = null;
console.log(luckyNum2);
luckyNum2 = 'some text string';
console.log(luckyNum2);

const myName = 'Jeff';
console.log(myName);
// myName = 'Josh';  cannot be reassigned

function fun() {
  let someNumber = 19;
  console.log(someNumber);

  if (someNumber > 20) {
    let a = 'block part executed';
    console.log(a);
  } else {
    console.log(`Its skipped because ${someNumber} is less then 20`);
  }
}
fun();
// console.log(someNumber); ReferenceError

function add(a, b) {
  return a + b;
}

console.log(add(5, 6));

const addNumber = function (a, b) {
  return a + b;
};
console.log(addNumber(10, 5));

const human = {
  dna: 'AABB',
  name: 'Dusan',
  walk() {
    console.log('walking');
  },
};

class Human {
  constructor(name) {
    this.dna = 'BBCC';
    this.name = name;
  }

  isHuman(human) {
    if (human.dna == 'AABB') {
      return true;
    }
  }
}
const list = ['one', 'two', 'three'];
list.push('number');
list.push('two');
list.push(1);
list.push(1);
list.push(1);
console.log(list);

const unique = new Set(list);
console.log(unique);

const dist = new Map([
  ['name', 1],
  ['surname', 2],
  ['gender', 3],
]);
console.log(dist);

setTimeout(() => {
  console.log('timeout done');
}, 1000); // callback function

// promise, better way
const promise = new Promise((resolve, reject) => {
  console.log('do something async here..');

  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    const success = false; // Change this to false to test rejection
    if (success) {
      resolve('success');
      console.log('resolve success after timeout..');
    } else {
      console.log('reject after timeout..');
      reject('failure');
    }
  }, 1000); // Wait 1 second before resolving or rejecting
});

// Handling the promise
promise
  .then((result) => {
    console.log(result); // Output: success
  })
  .catch((error) => {
    console.error(error); // Output: failure
  });

async function asyncFunction() {
  try {
    const result = await promise;
    console.log(result); // Output: success
    console.log('Output: success');
  } catch (error) {
    console.error(error); // Output: failure
    console.log('Output: failure');
  }
}

asyncFunction();

export function dk(a, b) {
  return a + b;
}
