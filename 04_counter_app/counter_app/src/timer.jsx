import React, {useEffect, userState, useState} from "react";

function Timer(){
    const[timer, SetTimer] = useState(0);
    const[isRunning, SetIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if(isRunning){
            timer = setInterval(() =>
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    });

    return(
        <>
            <div className="timer-app-container">
                <h2>Timer App</h2>
                <p>{timer}</p>
                <button onClick={() => SetIsRunning(true)}>Start</button>
                <button onClick={() => SetIsRunning(false)}>Pause</button>
                <button onClick={() => SetIsRunning(false)}>Reset</button>
            </div>
        </>
    );
}
export default Timer;