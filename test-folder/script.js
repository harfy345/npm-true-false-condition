// Importing the function from the installed package
const true_then_else_then = require('is-true-then-else-then');

// Defining two functions
const function1 = () => {
  console.log("Function 1 executed");
};

const function2 = () => {
  console.log("Function 2 executed");
};

// Boolean condition
const condition = true;

// Executing one of the functions based on the boolean condition
true_then_else_then( function1, function2);