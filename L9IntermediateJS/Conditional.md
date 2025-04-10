Conditional Loops in JavaScript: All Concepts
Conditional loops in JavaScript allow you to execute code repeatedly based on certain conditions. Here's a comprehensive overview of all key concepts related to conditional loops in JavaScript:

1. Basic Loop Types
while Loop
Executes a block of code as long as a condition is true

Condition is checked before each iteration

javascript
Copy
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
do...while Loop
Similar to while but condition is checked after the loop body

Guarantees at least one execution

javascript
Copy
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
for Loop
Compact syntax with initialization, condition, and increment in one line

javascript
Copy
for (let i = 0; i < 5; i++) {
    console.log(i);
}
2. Loop Control Statements
break
Exits the loop immediately

javascript
Copy
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
continue
Skips the current iteration and continues with the next one

javascript
Copy
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i); // Only odd numbers
}
3. Advanced Loop Concepts
Labeled Statements
Allows breaking or continuing specific loops in nested scenarios

javascript
Copy
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outerLoop;
        console.log(`i=${i}, j=${j}`);
    }
}
for...in Loop
Iterates over enumerable properties of an object

javascript
Copy
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
for...of Loop
Iterates over iterable objects (arrays, strings, etc.)

javascript
Copy
const arr = ['a', 'b', 'c'];
for (const value of arr) {
    console.log(value);
}
4. Special Loop Scenarios
Infinite Loops
Loops that never terminate (usually unintentional)

javascript
Copy
// Unintentional infinite loop
while (true) {
    console.log("This will run forever");
    // Forgot to add break condition or increment
}
Nested Loops
Loops within loops

javascript
Copy
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}
5. Modern Iteration Methods (Alternative to Loops)
Array Iteration Methods
forEach(), map(), filter(), reduce(), etc.

javascript
Copy
[1, 2, 3].forEach(item => console.log(item));
Iterators and Generators
Advanced iteration patterns

javascript
Copy
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

for (const num of numberGenerator()) {
    console.log(num);
}
6. Performance Considerations
for loops are generally fastest for array iteration

Modern methods like forEach are more readable but may be slower

Avoid expensive operations in loop conditions

Consider loop unrolling for performance-critical code

7. Common Pitfalls
Off-by-one errors (using <= instead of < or vice versa)

Modifying the loop counter within the loop body

Infinite loops from unmet conditions

Using var instead of let in loop headers (scoping issues)

Understanding these concepts will give you complete control over conditional loops in JavaScript.
