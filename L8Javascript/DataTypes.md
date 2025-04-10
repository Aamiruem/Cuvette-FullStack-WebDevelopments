Data Types in JavaScript: Comprehensive Guide
JavaScript has dynamic types, meaning variables can hold values of any type without type declaration. Here's a complete overview of JavaScript data types:

Primitive Data Types (7 types)
1. Number
Represents both integer and floating-point numbers

Examples: 42, 3.14, NaN (Not a Number), Infinity

Special values: NaN, Infinity, -Infinity

javascript
Copy
let age = 25;
let price = 99.99;
let result = 10 / "apple"; // NaN
2. String
Represents textual data

Can use single quotes ('), double quotes ("), or backticks (`)

Template literals (backticks) allow multiline strings and interpolation

javascript
Copy
let name = "Alice";
let greeting = `Hello, ${name}!`; // "Hello, Alice!"
3. Boolean
Logical type with only two values: true and false

javascript
Copy
let isActive = true;
let isAdmin = false;
4. Undefined
A variable that has been declared but not assigned a value

javascript
Copy
let x;
console.log(x); // undefined
5. Null
Represents an intentional absence of any object value

javascript
Copy
let empty = null;
6. BigInt
Represents integers larger than 2^53 - 1 (Number.MAX_SAFE_INTEGER)

Created by appending n to the end of an integer

javascript
Copy
const bigNumber = 1234567890123456789012345678901234567890n;
7. Symbol
Unique and immutable primitive value

Often used as object property keys

javascript
Copy
const id = Symbol("unique identifier");
Non-Primitive (Reference) Data Type
8. Object
Collections of key-value pairs

Includes:

Plain objects: { name: "John", age: 30 }

Arrays: [1, 2, 3]

Functions: function() {}

Dates: new Date()

Regular expressions: /pattern/

Other built-in objects

javascript
Copy
let person = {
  name: "John",
  age: 30,
  isAdmin: false
};

let colors = ["red", "green", "blue"];
Type Checking
Use typeof operator (with limitations) or more robust methods:

javascript
Copy
typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (historical bug)
typeof {};          // "object"
typeof [];          // "object"
typeof function(){};// "function"
typeof Symbol();    // "symbol"
typeof 10n;         // "bigint"
For better type checking:

javascript
Copy
Array.isArray([]);  // true
Object.prototype.toString.call([]); // "[object Array]"
Type Conversion
Implicit Conversion (Coercion)
javascript
Copy
"5" + 1;    // "51" (string concatenation)
"5" - 1;    // 4 (numeric operation)
true + 1;   // 2 (true becomes 1)
Explicit Conversion
javascript
Copy
Number("123");  // 123
String(123);    // "123"
Boolean(1);     // true
Special Cases
NaN (Not a Number)
javascript
Copy
isNaN("hello"); // true
Number.isNaN("hello"); // false (more precise)
Falsy Values
Values that evaluate to false in boolean context:

false

0

"" (empty string)

null

undefined

NaN

All other values are truthy.

ES6+ Additions
Template Literals
javascript
Copy
let name = "Alice";
console.log(`Hello, ${name}!`); // "Hello, Alice!"
BigInt
javascript
Copy
const huge = 9007199254740991n;
Symbol
javascript
Copy
const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
console.log(sym1 === sym2); // false (unique)
Memory Management
Primitives: Stored directly in the variable (stack memory)

Objects: Stored in heap memory, variable holds a reference

Understanding JavaScript's data types is fundamental to writing robust code and avoiding common pitfalls like type coercion surprises.
