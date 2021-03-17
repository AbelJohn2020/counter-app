import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
    const [increment, setIncrement] = useState(0)
    const handleClick = () => {
        setIncrement(increment+1);
        // setIncrement((i) => i +1 );
        console.log(increment);
    }

    const handleSubtract = () => {
        setIncrement(increment-1);
        console.log(increment);
    }

    const handleResest = () => {
        setIncrement(0);
        console.log(increment);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <h2>the value is: { value }</h2>
            <h2>the number is: { increment }</h2>
            <button type='button' onClick={() => handleClick()}>Increment</button>
            <button type='button' onClick={() => handleResest()}>Reset</button>
            <button type='button' onClick={() => handleSubtract()}>Decrement</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp

