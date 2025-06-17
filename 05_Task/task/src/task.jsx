import React, {useState, useEffect} from "react";
import './task.css'

function Task(){
    const[task, setTask] = useState();
    const[input, setInput] = useState();

    return(
        <>
            <div className="task-container">
                <p>دستنویس</p>

                <input type="text" className="task-input"></input>
                <button className="task-send-button">ارسال</button>
            </div>
        </>
    );
}
export default Task;