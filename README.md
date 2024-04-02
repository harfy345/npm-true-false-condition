# true-then-else-then

A simple utility function for executing one of two provided functions based on a boolean condition.

## Installation

You can install this package via npm:

```bash
npm install true-then-else-then
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

We import the true_then_else_then function from the is-true-then-else-then package.
We define two React components (component1 and component2).
We define a React functional component called App that renders either component1 or component2 based on the value of isDarkMode.
We use the useState hook to manage the state of isDarkMode.
We pass isDarkMode, component1, and component2 as arguments to the true_then_else_then function, which returns one of the components based on the value of isDarkMode.
Props
true_then_else_then(condition, item1, item2)
condition: A boolean value indicating which component to render.
item1: The first React component to render.
item2: The second React component to render.