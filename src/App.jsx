import React, { useState } from 'react';

function App() {
    let name = "you";
    let [count, setCount] = useState(0);
    const countSetter = (oldCount) => {
        setCount(oldCount + 1)
    }
    return (
        <div>
            <h1>Hello, {name}.</h1>
            <button onClick={() => setCount(countSetter)}>Click</button> to increment {count}!
        </div>
    );
}
export default App;
