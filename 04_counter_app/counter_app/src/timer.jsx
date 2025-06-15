import React, {useEffect, userState, useState} from "react";

function Timer(){
    const[isRunning, SetIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if(isRunning){
            
        }
    });

    return(
        <>
            <div className="timer-app-container">
                <h2>Timer App</h2>
                <button onClick={() => SetIsRunning(true)}>Start</button>
                <button onClick={() => SetIsRunning(false)}>Pause</button>
                <button onClick={() => SetIsRunning(false)}>Reset</button>
            </div>
        </>
    );
}
export default Timer;