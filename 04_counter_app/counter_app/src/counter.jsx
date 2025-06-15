import React, {useState} from "react";

function Counter(){
    const[count, setCount] = useState(0);

    function increaseHandle(){
        setCount(count + 1);
    }

    function decreaseHandle(){
        if(count > 0)
        {
            setCount(count - 1);
        }
        else
        {
            console.error("counter is less than 0");
        }
    }

    function resetHandle(){
        setCount(0);
    }

    return(
        <>
            <div className="counter-app-container">
                <h2>Counter App</h2>
                <p>{count}</p>
                <div className="counter-buttons">
                    <button onClick={increaseHandle}>+</button>
                    <button onClick={decreaseHandle}>-</button>
                    <button onClick={resetHandle}>R</button>
                </div>
            </div>
        </>
    );
}
export default Counter;