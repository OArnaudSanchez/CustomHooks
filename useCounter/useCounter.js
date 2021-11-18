import { useState } from 'react';

export const useCounter = ({ initialCounterValue = 0 }) => {

    const [counter, setCounter] = useState(initialCounterValue)

    const incrementCounter = () => {
        setCounter( counter + 1 );
    };

    const decrementCounter = () => {
        setCounter( counter - 1 );
    };

    const resetCounter = () => {
        setCounter( initialCounterValue );
    };

    return {
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    }
};