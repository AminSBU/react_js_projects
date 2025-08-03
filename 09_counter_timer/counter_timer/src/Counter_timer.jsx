import React, {useState} from "react";

function Counter_Timer()
{
    const[counter, setCounter] = useState(0);

    const StartInterval = () => {
        setInterval(() => {
            setCounter(prevcounter => prevcounter + 1)
        }, 1000);
    };

    return(<>
        <div className="items_container">
            <p>{counter}</p>
            <button onClick={StartInterval}></button>
        </div>
    </>);
}
export default Counter_Timer