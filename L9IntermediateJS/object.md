Objects in JavaScript
In JavaScript, objects are collections of key-value pairs and are one of the fundamental data types. They are used to store various data and more complex entities.

Creating Objects
There are several ways to create objects in JavaScript:

1. Object Literal Syntax (most common)
javascript
Copy
const person = {
  name: 'John',
  age: 30,
  isStudent: false,
  greet: function() {
    console.log('Hello!');
  }
};
2. Using the new Keyword
javascript
Copy
const person = new Object();
person.name = 'John';
person.age = 30;
3. Object Constructor Function
javascript
Copy
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const john = new Person('John', 30);
Accessing Object Properties
javascript
Copy
// Dot notation
console.log(person.name); // 'John'

// Bracket notation
console.log(person['age']); // 30

// For dynamic property names
const prop = 'name';
console.log(person[prop]); // 'John'
Modifying Objects
javascript
Copy
// Adding properties
person.job = 'Developer';

// Modifying properties
person.age = 31;

// Deleting properties
delete person.isStudent;
Object Methods
javascript
Copy
const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
  // ES6 shorthand
  sayHi() {
    console.log('Hi!');
  }
};

person.greet(); // "Hello, my name is John"
Special Object Features
Computed Property Names (ES6)
javascript
Copy
const prop = 'name';
const person = {
  [prop]: 'John' // property name is computed
};
Object Spread (ES2018)
javascript
Copy
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
Built-in Object Methods
javascript
Copy
const person = { name: 'John', age: 30 };

// Get array of keys
Object.keys(person); // ['name', 'age']

// Get array of values
Object.values(person); // ['John', 30]

// Get array of key-value pairs
Object.entries(person); // [['name', 'John'], ['age', 30]]

// Create a new object by merging
Object.assign({}, person, { job: 'Developer' });
Objects are central to JavaScript programming and form the basis for more advanced concepts like prototypes and classes.
