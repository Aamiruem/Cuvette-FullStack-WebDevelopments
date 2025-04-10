
// calling function

add(10, 60);


// function declaration
function add(a, b) {
    console.log(a + b);
}


// function expression
const add = function (a, b) {
    console.log(a + b);
}

// function expression with arrow function
const add = (a, b) => {
    console.log(a + b);
}


// function expression with arrow function and implicit return
const add = (a, b) => a + b;
console.log(add(10, 60)); // 70

// function expression with arrow function and implicit return with one parameter
const square = a => a * a;
console.log(square(10)); // 100

