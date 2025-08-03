import React, {useState} from "react";

function Counter_Timer()
{
    const[second, setSecond] = useState(0);

    const StartInterval = () => {
        let secValue = setInterval(() => {
            setSecond(prevcounter => prevcounter + 1)
        }, 1000);

        if(secValue >= 15)
        {
            clearInterval(secValue)
            setSecond(0);
        }
    };

    const StoptInterval = () => {
        setSecond(0);
    };

    return(<>
        <div className="items_container">
            <p>{second}</p>
            <button onClick={StartInterval}>Start</button>
            <button onClick={StoptInterval}>Stop</button>
        </div>
    </>);
}
export default Counter_Timer