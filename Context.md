Create a Context file (MyContext.js):
This file will contain the creation of the context and the provider component.
jsx
Copy code
// MyContext.js

import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const MyContext = createContext();

// Step 2: Create a Provider component
const MyProvider = ({ children }) => {
const [count, setCount] = useState(0);

return (
<MyContext.Provider value={{ count, setCount }}>
{children}
</MyContext.Provider>
);
};

// Export the Context and Provider
export { MyContext, MyProvider };
Create a Counter Component (Counter.js):
This component will use the context to display the count and increment the count when a button is clicked.
jsx
Copy code
// Counter.js

import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const Counter = () => {
const { count, setCount } = useContext(MyContext);

return (
<div>
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
};

export default Counter;
Create the App Component (App.js):
This component will use the provider from MyContext.js to provide the context to its children, including the Counter component.
jsx
Copy code
// App.js

import React from 'react';
import { MyProvider } from './MyContext';
import Counter from './Counter';

const App = () => {
return (
<MyProvider>
<div>
<h1>React Context Example</h1>
<Counter />
</div>
</MyProvider>
);
};

export default App;
