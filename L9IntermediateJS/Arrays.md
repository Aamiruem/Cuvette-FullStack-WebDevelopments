<!-- Arrays in JavaScript: All Concepts
Arrays are fundamental data structures in JavaScript that store ordered collections of values. Here's a comprehensive guide to all array concepts:

1. Array Creation
javascript
Copy
// Literal notation (most common)
const fruits = ['apple', 'banana', 'orange'];

// Constructor
const numbers = new Array(1, 2, 3);

// Empty array with length
const emptyArray = new Array(5); // Creates array with length 5

// Array.of() - fixes constructor ambiguity
const singleItem = Array.of(7); // [7] (not array with length 7)
2. Basic Operations
Accessing Elements
javascript
Copy
const first = fruits[0]; // 'apple'
const last = fruits[fruits.length - 1]; // 'orange'
Modifying Elements
javascript
Copy
fruits[1] = 'pear'; // ['apple', 'pear', 'orange']
Array Length
javascript
Copy
console.log(fruits.length); // 3
fruits.length = 2; // Truncates array: ['apple', 'pear']
3. Adding/Removing Elements
End of Array
javascript
Copy
fruits.push('kiwi'); // Add to end
const last = fruits.pop(); // Remove from end
Beginning of Array
javascript
Copy
fruits.unshift('strawberry'); // Add to beginning
const first = fruits.shift(); // Remove from beginning
At Specific Position
javascript
Copy
fruits.splice(1, 0, 'mango'); // Add at index 1
fruits.splice(1, 1); // Remove 1 item at index 1
fruits.splice(1, 1, 'peach'); // Replace 1 item at index 1
4. Iteration Methods
Basic Loops
javascript
Copy
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit of fruits) {
  console.log(fruit);
}
Functional Methods
javascript
Copy
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

const upperFruits = fruits.map(fruit => fruit.toUpperCase());

const filtered = fruits.filter(fruit => fruit.length > 5);
5. Searching and Sorting
Searching
javascript
Copy
const index = fruits.indexOf('banana'); // Returns index or -1
const hasApple = fruits.includes('apple'); // true/false
const found = fruits.find(fruit => fruit.startsWith('b'));
const foundIndex = fruits.findIndex(fruit => fruit.startsWith('b'));
Sorting
javascript
Copy
fruits.sort(); // Alphabetical
numbers.sort((a, b) => a - b); // Numeric ascending
numbers.sort((a, b) => b - a); // Numeric descending
6. Multidimensional Arrays
javascript
Copy
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); // 6
7. Array Transformation
Joining
javascript
Copy
const str = fruits.join(', '); // "apple, banana, orange"
Splitting
javascript
Copy
const newArray = str.split(', '); // Back to array
Concatenation
javascript
Copy
const combined = fruits.concat(['grape', 'melon']);
Spreading
javascript
Copy
const combined = [...fruits, ...['grape', 'melon']];
8. Advanced Methods
Reduction
javascript
Copy
const sum = numbers.reduce((total, num) => total + num, 0);
Testing
javascript
Copy
const allLong = fruits.every(fruit => fruit.length > 3);
const someLong = fruits.some(fruit => fruit.length > 6);
Flat/FlatMap
javascript
Copy
const nested = [1, [2, [3]]];
const flat = nested.flat(2); // [1, 2, 3]

const phrases = ['hello world', 'good morning'];
const words = phrases.flatMap(phrase => phrase.split(' '));
9. Array Buffers and Typed Arrays
javascript
Copy
const buffer = new ArrayBuffer(16); // 16 bytes
const int32View = new Int32Array(buffer); // 4 elements
10. Performance Considerations
Preallocate arrays when possible (new Array(size))

Use typed arrays for numeric operations

for loops are fastest for iteration

Methods like map, filter create new arrays (memory overhead)

11.Array-like Objects
javascript
Copy
// Convert array-like to real array
function example() {
  const argsArray = Array.from(arguments);
  // or [...arguments]
}
12.ES6+ Features
Destructuring
javascript
Copy
const [first, second] = fruits;
const [a, , c] = fruits; // Skip elements
Rest Parameters
javascript
Copy
const [first, ...rest] = fruits;
13.Immutable Patterns
javascript
Copy
// Adding without mutation
const newFruits = [...fruits, 'pineapple'];

// Removing without mutation
const removed = fruits.filter((_, i) => i !== 1);
Arrays in JavaScript are powerful and versatile, with methods available for nearly any operation you need to perform on ordered collections of data.
Deep Dive into JavaScript Arrays and Their Properties
Arrays in JavaScript are specialized objects designed for storing ordered collections of values. Let's explore their deep concepts and properties.

Fundamental Array Characteristics
Dynamic Nature: Arrays can grow/shrink dynamically

Type Flexibility: Can hold mixed data types

Zero-based Indexing: First element at index 0

Array Length Property: Not fixed, automatically updates

Array Creation Methods
javascript
Copy
// Literal syntax (most common)
const arr1 = [1, 2, 3];

// Constructor
const arr2 = new Array(1, 2, 3);

// Array.of() (ES6)
const arr3 = Array.of(1, 2, 3);

// Array.from() (ES6) - creates from array-like/iterable
const arr4 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
Core Array Properties
length Property
javascript
Copy
const fruits = ['apple', 'banana'];
console.log(fruits.length); // 2

// Can be manually set (truncates or extends array)
fruits.length = 1; // ['apple']
fruits.length = 3; // ['apple', empty × 2]
Important Array Methods
Mutation Methods (Change original array)
javascript
Copy
// push/pop - end of array
const stack = [1, 2];
stack.push(3); // [1, 2, 3]
stack.pop();   // returns 3, array is [1, 2]

// unshift/shift - beginning of array
const queue = [2, 3];
queue.unshift(1); // [1, 2, 3]
queue.shift();    // returns 1, array is [2, 3]

// splice - add/remove anywhere
const arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b'); // returns [2, 3], arr is [1, 'a', 'b', 4]

// sort and reverse
const nums = [3, 1, 2];
nums.sort(); // [1, 2, 3]
nums.reverse(); // [3, 2, 1]
Non-Mutation Methods (Return new array)
javascript
Copy
// slice - subarray copy
const arr = [1, 2, 3, 4];
arr.slice(1, 3); // returns [2, 3], original unchanged

// concat - combine arrays
[1, 2].concat([3, 4]); // [1, 2, 3, 4]

// map - transform elements
[1, 2, 3].map(x => x * 2); // [2, 4, 6]

// filter - select elements
[1, 2, 3, 4].filter(x => x > 2); // [3, 4]

// reduce - accumulate values
[1, 2, 3].reduce((sum, x) => sum + x, 0); // 6
Advanced Array Concepts
Sparse Arrays
Arrays can have "holes" where indexes are unset:

javascript
Copy
const sparse = [1, , 3]; // Index 1 is empty
console.log(sparse.length); // 3
console.log(1 in sparse); // false (no element at index 1)
Array-Like Objects
Objects with numeric keys and length that aren't arrays:

javascript
Copy
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
Array.from(arrayLike); // Convert to real array
Typed Arrays
For handling binary data efficiently:

javascript
Copy
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer); // 4 elements (4 bytes each)
ES6+ Array Features
Destructuring Assignment
javascript
Copy
const [first, second, ...rest] = [1, 2, 3, 4];
// first=1, second=2, rest=[3, 4]
Spread Operator
javascript
Copy
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
Array.find/findIndex
javascript
Copy
const users = [{id: 1}, {id: 2}];
users.find(user => user.id === 2); // {id: 2}
users.findIndex(user => user.id === 2); // 1
Array.includes
javascript
Copy
[1, 2, 3].includes(2); // true
Performance Considerations
Push/pop are O(1) operations (fast)

Shift/unshift are O(n) operations (slow as they reindex)

Access by index is O(1) (very fast)

Search operations (indexOf, includes) are O(n)

Understanding these deep concepts helps optimize array operations in performance-critical applications. -->
