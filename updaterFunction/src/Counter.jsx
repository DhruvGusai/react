// updater Function = A Function passed as an argument to setState  usually 
//                   ex. setYear(updater arrow function)
//                   Allows for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous functions
//                   Good practice to use updater functions




import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function Decrement() {
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1);
    }
    function Reset() {
        setCount(0);
    }
    function Increment() {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }



    return (
        <>
            <div className="counterContainer">
                <div>
                    <h1 className="counterDisplay">{count}</h1>
                    <button className="btn" onClick={Decrement}>Decrement</button>
                    <button className="btn" onClick={Reset}>Reset</button>
                    <button className="btn" onClick={Increment}>Increment</button>
                </div>
            </div>
        </>
    );

}

export default Counter;