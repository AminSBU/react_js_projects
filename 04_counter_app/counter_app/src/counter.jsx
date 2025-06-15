import React, {useState} from "react";

function Counter(){
    const[count, setCount] = useState(0);

    return(
        <>
            <div className="counter-app-container">
                <h2>Counter App</h2>
                <p>{count}</p>
            </div>
        </>
    );
}
export default Counter;