avaScript Function Declarations and Expressions
Here's a corrected and better explanation of the different ways to define functions in JavaScript:

1. Function Declaration (Hoisted)
javascript
Copy
add(10, 60); // Works due to hoisting

function add(a, b) {
    console.log(a + b);
}
Declared with the function keyword

Hoisted: Can be called before declaration

Has its own this binding

2. Function Expression
javascript
Copy
const add = function(a, b) {
    console.log(a + b);
};

add(10, 60); // Must be called after assignment
Assigned to a variable

Not hoisted: Cannot be called before assignment

Also called "anonymous function"

3. Arrow Function (ES6+)
javascript
Copy
const add = (a, b) => {
    console.log(a + b);
};

add(10, 60);
Shorter syntax

No hoisting (like function expressions)

Lexical this binding (inherits from surrounding scope)

No arguments object

4. Arrow Function with Implicit Return
javascript
Copy
const add = (a, b) => a + b;
console.log(add(10, 60)); // 70
When there's only one expression, you can omit {} and return

Automatically returns the expression's result

5. Single Parameter Arrow Function
javascript
Copy
const square = a => a * a;
console.log(square(10)); // 100
With exactly one parameter, parentheses () can be omitted

Still uses implicit return

Key Differences:
Hoisting: Only function declarations are hoisted

this binding: Arrow functions don't have their own this

Syntax: Arrow functions are more concise

Use cases:

Use declarations when you need hoisting

Use expressions/arrows when you need scoped functions

Prefer arrows for callbacks and when lexical this is needed

Best practice is to be consistent in your codebase about which style you use.
Higher-Order Functions (HOF) in JavaScript
A Higher-Order Function (HOF) is a function that either:

Takes one or more functions as arguments, or

Returns a function as its result

Characteristics of HOFs:
Treat functions as first-class citizens

Enable functional programming patterns

Allow for composition and abstraction of behavior

Common Examples of HOFs:

1. Functions that accept other functions as arguments
javascript
Copy
// Array method examples (built-in HOFs)
const numbers = [1, 2, 3, 4, 5];

// forEach - takes a function and applies it to each element
numbers.forEach(num => console.log(num * 2));

// map - transforms each element and returns new array
const doubled = numbers.map(num => num * 2);

// filter - selects elements based on condition
const evens = numbers.filter(num => num % 2 === 0);

// reduce - accumulates values
const sum = numbers.reduce((acc, num) => acc + num, 0);
2. Functions that return functions
javascript
Copy
// Function that creates multiplier functions
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
3. Custom Higher-Order Functions
javascript
Copy
// Logger HOF that wraps any function with logging
function withLogging(fn) {
  return function(...args) {
    console.log(`Calling function with args: ${args}`);
    const result = fn(...args);
    console.log(`Function returned: ${result}`);
    return result;
  };
}

// Regular function
function add(a, b) {
  return a + b;
}

// Enhanced version with logging
const addWithLogging = withLogging(add);

addWithLogging(3, 5);
// Logs:
// Calling function with args: 3,5
// Function returned: 8
Why Use Higher-Order Functions?
Abstraction: Hide implementation details

Reusability: Create generic utilities

Composition: Build complex behavior from simple functions

Declarative code: Focus on "what" rather than "how"

Advanced HOF Patterns:
Currying (Transforming multi-arg functions into sequences)
javascript
Copy
const multiply = a => b => a *b;
const double = multiply(2);
console.log(double(5)); // 10
Function Composition
javascript
Copy
const compose = (f, g) => x => f(g(x));
const add1 = x => x + 1;
const square = x => x* x;
const add1ThenSquare = compose(square, add1);
console.log(add1ThenSquare(4)); // 25 (4+1=5, 5²=25)
Higher-order functions are fundamental to functional programming in JavaScript and are heavily used in modern frameworks and libraries like React, Redux, and Lodash.
