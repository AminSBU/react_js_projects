import React, { useState } from "react";
import './task.css';

function Task() {
    const [tasks, setTasks] = useState([]); // use an array to store multiple tasks
    const [input, setInput] = useState("");

    function SendTaskHandler() {
        if (input.trim() === "") return; // ignore empty input
        setTasks([...tasks, input]);     // add new task to the array
        setInput("");                    // clear input field after adding
    }

    return (
        <>
            <div className="task-container">
                <p>دستنویس</p>

                <input 
                    type="text" 
                    className="task-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="task-send-button" onClick={SendTaskHandler}>
                    ارسال
                </button>

                {/* Display each task in a new line */}
                <div className="task-display">
                    {tasks.map((task, index) => (
                        <p key={index}>Task {index + 1}: {task}</p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Task;