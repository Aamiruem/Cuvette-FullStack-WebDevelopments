Functions and Related Concepts in JavaScript
Functions are fundamental building blocks in JavaScript. Here's a comprehensive overview of functions and related concepts:

Basic Function Types

1. Function Declarations
javascript
Copy
function greet(name) {
  return `Hello, ${name}!`;
}
2. Function Expressions
javascript
Copy
const greet = function(name) {
  return `Hello, ${name}!`;
};
3. Arrow Functions (ES6+)
javascript
Copy
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Shorter form for single expressions
const greet = name => `Hello, ${name}!`;
4. Immediately Invoked Function Expressions (IIFE)
javascript
Copy
(function() {
  console.log('This runs immediately');
})();

// With arrow function
(() => {
  console.log('IIFE with arrow function');
})();
Advanced Function Concepts
5. Higher-Order Functions
Functions that take other functions as arguments or return functions

javascript
Copy
function higherOrder(fn) {
  return function() {
    console.log('Before execution');
    fn();
    console.log('After execution');
  };
}
6. Callback Functions
Functions passed as arguments to other functions

javascript
Copy
function processData(data, callback) {
  // Process data
  callback(result);
}
7. Generator Functions (ES6+)
Functions that can be paused and resumed

javascript
Copy
function* idGenerator() {
  let id = 1;
  while(true) {
    yield id++;
  }
}
8. Async Functions (ES2017+)
Functions that return promises

javascript
Copy
async function fetchData() {
  const response = await fetch('<https://api.example.com/data>');
  return response.json();
}
Function Parameters
9. Default Parameters
javascript
Copy
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
10. Rest Parameters
javascript
Copy
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
11. Destructured Parameters
javascript
Copy
function displayUser({name, age, email}) {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}
Function Properties and Methods
12. Function Properties
javascript
Copy
function example() {}
example.customProperty = 'I am a function property';
13. Built-in Methods
javascript
Copy
function greet() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: 'Alice' };
greet.call(person);      // Sets 'this' context
greet.apply(person, []); // Similar to call but takes array of arguments
const boundGreet = greet.bind(person); // Creates new bound function
Special Function Types
14. Constructor Functions
javascript
Copy
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Alice', 30);
15. Pure Functions
Functions that always return the same output for the same input and have no side effects

javascript
Copy
function add(a, b) {
  return a + b;
}
16. Recursive Functions
Functions that call themselves

javascript
Copy
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
Function-related ES6+ Features
17. Function Name Inference
javascript
Copy
const greet = function greeting() {};
console.log(greet.name); // "greeting"
18. Tail Call Optimization
(Though not widely implemented in JavaScript engines)

javascript
Copy
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n *acc); // Tail call
}
19. Parameter Context Matching
javascript
Copy
function f([x, y, z]) { /* ... */ }
function g({x, y, z}) { /* ... */ }
Function Execution Context
20. this Binding
javascript
Copy
const obj = {
  value: 42,
  getValue: function() {
    return this.value;
  }
};
21. Closures
javascript
Copy
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
22. Currying
javascript
Copy
const multiply = a => b => a* b;
const double = multiply(2);
console.log(double(5)); // 10
Function Metadata
23. arguments Object
javascript
Copy
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
24. length Property
javascript
Copy
function example(a, b, c) {}
console.log(example.length); // 3 (number of parameters)
This covers most of the function-related concepts in JavaScript, from basic to advanced. Functions are first-class citizens in JavaScript, meaning they can be assigned to variables, passed as arguments, and returned from other functions, which enables powerful functional programming patterns
