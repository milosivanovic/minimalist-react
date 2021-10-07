import React, { useState } from 'react';

const App = () => {
    let name = "you";
    let [count, setCount] = useState(0);
    const updateCount = () => {
        setCount((oldCount) => oldCount+1);
    }

    return (
        <div>
            <h1>Hello, {name}.</h1>
            <button onClick={updateCount}>Click</button> to increment {count}!
        </div>
    );
}
export default App;
