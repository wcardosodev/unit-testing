import React, { useState} from 'react';

export const Counter = props => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);

    const decrement = () => {
        // Only decrement if counter is greater than 0
        if (counter === 0) return;
        setCounter(counter - 1);
    }

    return (
        <div className='app'>
            <h1>Counter</h1>
            <div id='counter-text'>{counter}</div>
            <button className='btn-inc' onClick={increment}>Increment</button>
            <button className='btn-dec' onClick={decrement}>Decrement</button>
        </div>
    );
};