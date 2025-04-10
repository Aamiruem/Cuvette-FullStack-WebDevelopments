// Function named 'greet' that takes 'morning' as parameter
function greet(morning) {
    // This function currently doesn't do anything meaningful
    // It accepts a parameter but doesn't use it
    // Returns undefined implicitly
}

// Function named 'greet' (originally misspelled as 'greet')
function greet() {
    console.log("Good morning"); // Originally had mixed quotes and misspelling
    return function() { // Returns an anonymous function
        console.log("Good morning"); // Originally had misspelled 'console'
    };
}

// Assigning the greet function to variable 'function1'
let function1 = greet();

// Checking if function1 is truthy and calling it if true
if (function1) {
    function1(); // Calls the returned function which logs "Good morning"
}

console.log("Hello world"); // Originally had mixed quotes and comma instead of dot

// Calling greet directly
greet(); // Originally had Chinese parentheses


// let greet = () => {
    console.log("Good morning"); // Arrow function syntax
    // return () => { // Returns an anonymous arrow function
//         console.log("Good morning"); // Arrow function syntax
//     };
// }

setTimeout(greet, 2000); // Calls greet after 2 seconds
// setTimeout is a built-in JavaScript function that executes a function after a specified delay

setInterval(() => {
    console.log("I am a function"); // Logs "Hello world" every second
},
    2000); // Calls the function every 1 second
console.log("i got printed first"); // Logs "Hello world" immediately
// setInterval is a built-in JavaScript function that repeatedly calls a function at specified intervals
// setTimeout is a built-in JavaScript function that executes a function after a specified delay
