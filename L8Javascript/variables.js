// JavaScript Variables: All Concepts
// Variables are fundamental to JavaScript programming. Here's a comprehensive overview of all variable-related concepts in JavaScript:

// 1. Variable Declaration
// JavaScript provides three ways to declare variables:

// var (ES5 and earlier)
// javascript
// Copy
var x = 10;
Function-scoped

// Hoisted (declaration moved to top of scope)

// Can be redeclared

// let (ES6+)
// javascript
// Copy
let y = 20;
Block-scoped ({ })

// Not hoisted in the same way as var

// Cannot be redeclared in same scope

// Can be updated

// const (ES6+)
// javascript
// Copy
const z = 30;
Block-scoped

// Must be initialized during declaration

// Cannot be redeclared or reassigned

// For objects/arrays, properties/elements can be modified

// 2. Variable Scope
// Global Scope
// javascript
// Copy
var globalVar = "I'm global";
// Accessible anywhere in the code

// Becomes property of the window object in browsers

// Function Scope
// javascript
// Copy
function example() {
  var funcVar = "I'm function-scoped";
}
// Only accessible within the function (for var)

// Block Scope
// javascript
// Copy
if (true) {
  let blockVar = "I'm block-scoped";
  const anotherBlockVar = "Me too";
}
// Only accessible within the block { } (for let and const)

// 3. Hoisting
// JavaScript moves declarations to the top of their scope:

// javascript
// Copy
console.log(a); // undefined (not ReferenceError)
var a = 5;
// var: Declaration hoisted, initialization not

// let/const: Hoisted but not initialized (Temporal Dead Zone)

// 4. Temporal Dead Zone (TDZ)
// The period between entering scope and variable declaration where the variable cannot be accessed:

// javascript
// Copy
console.log(b); // ReferenceError
// let b = 10;

// 5. Variable Naming Rules
// Must begin with letter, _ or $

// Can contain letters, numbers, _ and $

// Case sensitive

// Cannot use reserved keywords

// Convention: camelCase for variables, UPPER_CASE for constants

// 6. Dynamic Typing
// JavaScript variables can hold any type:

// javascript
// Copy
let dynamic = 10;    // number
dynamic = "hello";   // string
dynamic = true;      // boolean
// 7. Variable Destructuring (ES6+)
// Unpack values from arrays or properties from objects:

// javascript
// Copy
// Array destructuring
const [first, second] = [1, 2];

// Object destructuring
const {name, age} = {name: "John", age: 30};
// 8. Default Values
// Variables can have default values:

// javascript
// Copy
let [a = 1, b = 2] = [10]; // a=10, b=2

function foo(param = "default") {
  console.log(param);
}
// 9. Global Variables
// Creating globals (generally discouraged):

// javascript
// Copy
// Implicit global (without declaration)
globalVar = "I'm global";

// Explicit in browser
window.globalVar = "I'm global";
// 10. Variable Shadowing
// When a variable in a local scope has same name as in outer scope:

// javascript
// Copy
let x = 10;

function shadow() {
  let x = 20; // Shadows the outer x
  console.log(x); // 20
}
// 11. Garbage Collection
// JavaScript automatically frees memory when variables are no longer reachable.

// 12. Variable Lifecycle
// Declaration

// Initialization

// Assignment

// Usage

// Garbage collection (when no longer referenced)

// Best Practices
// Prefer const by default

// Use let when you need to reassign

// Avoid var in modern code

// Minimize global variables

// Use meaningful names

// Initialize variables when declaring theme
