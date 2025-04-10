All Loops in JavaScript: Complete Guide
Loops in JavaScript allow you to execute a block of code repeatedly. JavaScript provides several types of loops for different use cases.

1. for Loop
Best for looping a specific number of times.

Syntax:
javascript
Copy
for (initialization; condition; increment/decrement) {
  // code to execute
}
Example:
javascript
Copy
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
Key Points:
initialization → Runs once before the loop starts.

condition → Checked before each iteration.

increment/decrement → Runs after each iteration.

2. while Loop
Best when you don't know the number of iterations in advance.

Syntax:
javascript
Copy
while (condition) {
  // code to execute
}
Example:
javascript
Copy
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}
Key Points:
Checks the condition before executing the loop.

Risk of infinite loop if the condition never becomes false.

3. do...while Loop
Similar to while, but executes at least once.

Syntax:
javascript
Copy
do {
  // code to execute
} while (condition);
Example:
javascript
Copy
let i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
} while (i < 5);
Key Points:
Executes first, then checks the condition.

Useful when you must run the loop at least once.

4. for...in Loop
Used to iterate over object properties.

Syntax:
javascript
Copy
for (let key in object) {
  // code to execute
}
Example:
javascript
Copy
const person = { name: "Alice", age: 25 };

for (let key in person) {
  console.log(key, person[key]);
  // Output: "name Alice", "age 25"
}
Key Points:
Best for objects (not recommended for arrays).

Iterates over enumerable properties (including inherited ones).

5. for...of Loop
Used to iterate over iterables (arrays, strings, maps, sets).

Syntax:
javascript
Copy
for (let value of iterable) {
  // code to execute
}
Example:
javascript
Copy
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color); // "red", "green", "blue"
}
Key Points:
Works with arrays, strings, maps, sets (not plain objects).

Returns values (not keys/indexes).

6. forEach() (Array Method)
Used to iterate over arrays (not a loop, but similar behavior).

Syntax:
javascript
Copy
array.forEach((item, index, array) => {
  // code to execute
});
Example:
javascript
Copy
const numbers = [1, 2, 3];

numbers.forEach((num, index) => {
  console.log(num, index); // 1 0, 2 1, 3 2
});
Key Points:
Only works with arrays.

Cannot break or continue (unlike for loops).

7. break and continue in Loops
break → Exits the loop immediately.

continue → Skips the current iteration and moves to the next.

Example:
javascript
Copy
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Skip 2
  if (i === 4) break;    // Stop at 4
  console.log(i); // 0, 1, 3
}
8. map(), filter(), reduce() (Array Methods)
Not loops, but often used for iteration.

Method Description Example
map() Transforms each element [1,2,3].map(x => x * 2) → [2,4,6]
filter() Returns matching elements [1,2,3].filter(x => x > 1) → [2,3]
reduce() Reduces to a single value [1,2,3].reduce((sum, x) => sum + x, 0) → 6
Summary Table
Loop Best For Example
for Fixed iterations for (let i=0; i<5; i++)
while Unknown iterations while (x < 10)
do...while Run at least once do {...} while (x < 10)
for...in Object properties for (let key in obj)
for...of Arrays, strings for (let val of arr)
forEach() Arrays only arr.forEach(item => ...)
When to Use Which?
for → Counting loops (e.g., for (let i=0; i<n; i++)).

while → When the exit condition is dynamic.

do...while → When you must run the loop once.

for...of → Best for arrays (cleaner than for).

for...in → Only for objects (avoid for arrays).

forEach() → Functional-style array iteration.

Best Practices
✅ Prefer for...of over for for arrays (cleaner syntax).
✅ Use for...in only for objects (not arrays).
✅ Use map(), filter(), reduce() for functional programming.
❌ Avoid forEach() if you need break or continue (use for...of instead).

These loops cover all iteration needs in JavaScript! 🚀
