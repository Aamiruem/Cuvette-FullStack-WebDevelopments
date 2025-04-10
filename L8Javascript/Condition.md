Conditions in JavaScript: Complete Guide
Conditions in JavaScript allow you to execute different blocks of code based on whether a specified condition is true or false. JavaScript provides several ways to handle conditions:

1. if Statement
The most basic conditional statement.

Syntax:
javascript
Copy
if (condition) {
  // code to execute if condition is true
}
Example:
javascript
Copy
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
2. if...else Statement
Executes one block if the condition is true and another if it's false.

Syntax:
javascript
Copy
if (condition) {
  // code if true
} else {
  // code if false
}
Example:
javascript
Copy
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
3. if...else if...else Statement
Checks multiple conditions in sequence.

Syntax:
javascript
Copy
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if all conditions are false
}
Example:
javascript
Copy
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
4. Ternary Operator (? :)
A shorthand for if...else.

Syntax:
javascript
Copy
condition ? exprIfTrue : exprIfFalse
Example:
javascript
Copy
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"
5. switch Statement
Used for multiple conditions where a single variable is checked against different cases.

Syntax:
javascript
Copy
switch (expression) {
  case value1:
    // code for value1
    break;
  case value2:
    // code for value2
    break;
  default:
    // code if no case matches
}
Example:
javascript
Copy
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Midweek day");
}
Key Notes:
break is crucial to prevent "fall-through" (executing multiple cases).

default runs if no case matches.

6. Logical Operators in Conditions
Used to combine multiple conditions.

Operator	Meaning	Example
&&	AND	if (age > 18 && age < 60)
`		`	OR	`if (score < 50		score > 90)`
!	NOT	if (!isLoggedIn)
Example:
javascript
Copy
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}
7. Truthy and Falsy Values
JavaScript evaluates non-boolean values in conditions:

Falsy (treated as false):

false

0

"" (empty string)

null

undefined

NaN

Truthy (treated as true):

Everything else ("0", "false", [], {}, etc.)

Example:
javascript
Copy
let name = "";

if (name) {
  console.log("Name is provided.");
} else {
  console.log("Name is empty."); // This runs
}
8. Nullish Coalescing (??)
Checks if a value is null or undefined (not just falsy).

Example:
javascript
Copy
let input = null;
let value = input ?? "default"; // "default"
9. Optional Chaining (?.)
Safely access nested properties.

Example:
javascript
Copy
const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // "Alice"
console.log(user?.address?.city); // undefined (no error)
Summary Table
Statement	Use Case
if	Single condition
if...else	Two possible outcomes
if...else if...else	Multiple conditions
Ternary (? :)	Shorthand for if...else
switch	Multiple cases for one variable
Logical Operators (&&, `		, !`)	Combine conditions
Nullish Coalescing (??)	Fallback for null/undefined
Optional Chaining (?.)	Safe property access
Best Practices:
Prefer === (strict equality) over == (loose equality).

Use switch for multiple fixed cases.

Use ?. and ?? for safer code.

Avoid deeply nested if statements (use functions or early returns).

These conditionals are fundamental to controlling program flow in JavaScript. 🚀
