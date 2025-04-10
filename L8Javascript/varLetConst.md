var, let, and const in JavaScript: Complete Guide
JavaScript provides three ways to declare variables: var, let, and const. Understanding their differences is crucial for writing modern JavaScript code.

1. var (Old-School Variable Declaration)
Characteristics:
Function-scoped (not block-scoped)

Hoisted to the top of their scope

Re-declarable in the same scope

No temporal dead zone (can be accessed before declaration, returns undefined)

javascript
Copy
function varExample() {
  console.log(x); // undefined (hoisted)
  var x = 10;
  
  if (true) {
    var x = 20; // Same variable!
    console.log(x); // 20
  }
  
  console.log(x); // 20
}
Issues with var:
Can lead to unexpected behavior due to hoisting and re-declaration

Doesn't respect block scope (if, for, etc.)

Can cause bugs in larger codebases

2. let (Modern Block-Scoped Variable)
Characteristics:
Block-scoped (limited to the block where it's defined)

Not hoisted in the same way as var (has a temporal dead zone)

Not re-declarable in the same scope

Mutable (value can be changed)

javascript
Copy
function letExample() {
  // console.log(y); // ReferenceError (temporal dead zone)
  let y = 10;
  
  if (true) {
    let y = 20; // Different variable
    console.log(y); // 20
  }
  
  console.log(y); // 10
}
3. const (Modern Block-Scoped Constant)
Characteristics:
Block-scoped like let

Not hoisted (has a temporal dead zone)

Not re-declarable in the same scope

Immutable binding (can't be reassigned after declaration)

Must be initialized during declaration

javascript
Copy
function constExample() {
  const z = 10;
  // z = 20; // TypeError: Assignment to constant variable
  
  if (true) {
    const z = 20; // Different constant
    console.log(z); // 20
  }
  
  console.log(z); // 10
}
Important Note About const:
For objects and arrays, the contents can be modified, just not reassigned

javascript
Copy
const person = { name: "Alice" };
person.name = "Bob"; // Allowed
// person = { name: "Charlie" }; // Error
Comparison Table
Feature	var	let	const
Scope	Function	Block	Block
Hoisting	Yes	No (TDZ)	No (TDZ)
Re-declarable	Yes	No	No
Re-assignable	Yes	Yes	No
Temporal Dead Zone	No	Yes	Yes
Requires initialization	No	No	Yes
Best Practices
Prefer const by default - Use it for all variables that won't be reassigned

Use let when you need to reassign - For counters, loops, or values that change

Avoid var - Only use it if you need to support very old browsers or have specific requirements

Declare variables at the top of their scope - Improves readability and avoids TDZ issues

Examples in Different Contexts
Loop Example
javascript
Copy
// var (problematic)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// let (correct)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // 0, 1, 2
}
Block Scope Example
javascript
Copy
{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
Function Scope Example
javascript
Copy
function test() {
  var x = 1;
  let y = 2;
  const z = 3;
  
  if (true) {
    var x = 10; // Same variable
    let y = 20; // Different variable
    const z = 30; // Different constant
  }
  
  console.log(x, y, z); // 10, 2, 3
}
By understanding these differences, you can write more predictable and maintainable JavaScript code. Modern JavaScript development primarily uses const and let, with var being largely obsolete in new code.
