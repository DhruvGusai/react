import React, {useState} from "react";

function Counter(){

    const[count, setCount]= useState(0);

    const increment = () => {
        setCount(count +1)
    };
    const decrement = () => {
        setCount(count -1)

    };
    const reset = () => {
        setCount(0)
    };


    return (
        <div className="counterContainer">
            <p className="countDisplay"> {count} </p>
            <button className="counterBtn" onClick={decrement}>DECREMENT</button>
            <button className="counterBtn" onClick={reset}>RESET</button>
            <button className="counterBtn" onClick={increment}>INCREMENT</button>
        </div>
    );
}

export default Counter;