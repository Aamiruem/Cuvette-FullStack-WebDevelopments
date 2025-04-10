JavaScript Operators: Comprehensive Guide
JavaScript provides a rich set of operators for performing operations on variables and values. Here's a complete breakdown of all operator types in JavaScript:

1. Arithmetic Operators
Operator	Description	Example
+	Addition	5 + 2 → 7
-	Subtraction	5 - 2 → 3
*	Multiplication	5 * 2 → 10
/	Division	5 / 2 → 2.5
%	Remainder	5 % 2 → 1
**	Exponentiation	5 ** 2 → 25
++	Increment	x++ or ++x
--	Decrement	x-- or --x
Note: ++x (prefix) increments before returning, x++ (postfix) returns then increments.

2. Assignment Operators
Operator	Example	Equivalent To
=	x = 5	x = 5
+=	x += 5	x = x + 5
-=	x -= 5	x = x - 5
*=	x *= 5	x = x * 5
/=	x /= 5	x = x / 5
%=	x %= 5	x = x % 5
**=	x **= 5	x = x ** 5
3. Comparison Operators
Operator	Description	Example
==	Equal to (loose equality)	5 == '5' → true
===	Equal value and type (strict equality)	5 === '5' → false
!=	Not equal (loose)	5 != '5' → false
!==	Not equal value or type (strict)	5 !== '5' → true
>	Greater than	5 > 3 → true
<	Less than	5 < 3 → false
>=	Greater than or equal to	5 >= 5 → true
<=	Less than or equal to	5 <= 3 → false
4. Logical Operators
Operator	Description	Example
&&	Logical AND	true && false → false
`		`	Logical OR	`true		false` → true
!	Logical NOT	!true → false
Short-circuit evaluation:

&& returns first falsy value or last truthy value

|| returns first truthy value or last falsy value

5. Bitwise Operators
Operator	Description	Example
&	AND	5 & 1 → 1
`	`	OR	`5	1` → 5
^	XOR	5 ^ 1 → 4
~	NOT	~5 → -6
<<	Left shift	5 << 1 → 10
>>	Right shift	5 >> 1 → 2
>>>	Unsigned right shift	-5 >>> 1 → 2147483645
6. String Operators
Operator	Description	Example
+	Concatenation	'Hello' + 'World' → 'HelloWorld'
+=	Concatenation assignment	str += '!'
7. Conditional (Ternary) Operator
javascript
Copy
condition ? exprIfTrue : exprIfFalse
Example:

javascript
Copy
let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor'; // 'Adult'
8. Type Operators
Operator	Description	Example
typeof	Returns variable type	typeof 'hello' → 'string'
instanceof	Checks object type	arr instanceof Array → true
9. Nullish Coalescing Operator (??)
Returns right operand when left is null or undefined:

javascript
Copy
let value = null ?? 'default'; // 'default'
let value = 0 ?? 'default'; // 0 (not null/undefined)
10. Optional Chaining Operator (?.)
Safely access nested properties:

javascript
Copy
const user = { profile: { name: 'John' } };
console.log(user?.profile?.name); // 'John'
console.log(user?.address?.city); // undefined (no error)
11. Comma Operator
Evaluates multiple expressions, returns the last one:

javascript
Copy
let x = (1, 2, 3); // x = 3
Operator Precedence
Operators are evaluated in this general order (highest to lowest precedence):

Grouping ()

Member access ., [], new (with args)

Function call (), new (without args)

Postfix ++, --

Logical NOT !, bitwise NOT ~, unary +, -, ++, --, typeof, void, delete, await

Exponentiation **

Multiplication *, division /, remainder %

Addition +, subtraction -

Bitwise shift <<, >>, >>>

Relational <, <=, >, >=, in, instanceof

Equality ==, !=, ===, !==

Bitwise AND &

Bitwise XOR ^

Bitwise OR |

Logical AND &&

Logical OR ||

Nullish coalescing ??

Conditional ?:

Assignment =, +=, -=, etc.

Comma ,

Special Notes
Falsy Values: false, 0, "", null, undefined, NaN

Truthy Values: Everything not falsy (including "0", "false", empty objects/arrays)

String + Number: Results in string concatenation ("5" + 2 → "52")

Automatic Type Conversion: Be careful with == (prefer ===)

Understanding JavaScript operators is fundamental to writing effective code and avoiding common pitfalls, especially around type coercion and operator precedence.
