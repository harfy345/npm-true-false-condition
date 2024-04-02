# true-then-else-then

#### For react
Rendering one of two components based on a boolean condition
#### For Javascript 
executing one of two provided functions based on a boolean condition.

## Installation

You can install this package via npm:

```bash
npm install is-true-then-else-then
```
## Usage
```javascript

import React, { useState } from 'react';
import true_then_else_then from 'is-true-then-else-then';
import './App.css';

const component1 = (
  <div>hello from first component</div>
);
const component2 = (
  <div>hello from second component</div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      {true_then_else_then(isDarkMode, component1 , component2)}
    </>
  );
}

export default App;
```
In this example:

 - We import the true_then_else_then function from the is-true-then-else-then package.
 - We define two React components (component1 and component2).
 - We define a React functional component called App that renders either component1 or component2 based on the value of isDarkMode.
 - We use the useState hook to manage the state of isDarkMode.
 - We pass isDarkMode, component1, and component2 as arguments to the true_then_else_then function, which returns one of the components based on the value of isDarkMode.
Props
 - true_then_else_then(condition, item1, item2)
 - condition: A boolean value indicating which component to render.
 - item1: The first React component to render.
 - item2: The second React component to render.


 ## Pure Javascript use case

 Here's a use case demonstrating how you might use true_then_else_then in a pure JavaScript environment:

```javascript
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
true_then_else_then(condition, function1, function2);

```

In this use case:

 - We import the true_then_else_then function from the installed true-then-else-then package.
 - We define two functions, function1 and function2, each containing some code to execute.
 - We have a boolean condition (condition) that determines which function to execute.
 - We pass the boolean condition along with the two functions to true_then_else_then, which will execute either function1 or function2 based on the condition.

### This demonstrates how you can use true_then_else_then in a pure JavaScript environment outside of React to execute different functions based on a boolean condition.