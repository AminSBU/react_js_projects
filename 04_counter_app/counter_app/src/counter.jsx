import React, {useState} from "react";

function Counter(){
    const[count, setCount] = useState(0);

    return(
        <>
            <div className="counter-app-container">
                <h2>Counter App</h2>
                <p>{count}</p>
                <div className="counter-buttons">
                    <button>+</button>
                    <button>-</button>
                    <button>R</button>
                </div>
            </div>
        </>
    );
}
export default Counter;