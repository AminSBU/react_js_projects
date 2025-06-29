import React, { useState } from "react";
import './task.css';
import moment from 'jalali-moment';

function Task() {
    const [tasks, setTasks] = useState([]); 
    const [input, setInput] = useState("");
    const [date, setDate] = useState(""); // state برای ذخیره تاریخ انتخاب شده

    const now = moment().locale('fa'); 
    const jalaliDate = now.format('jYYYY/jMM/jDD');

    function SendTaskHandler() {
        if (input.trim() === "") return;

        // نمونه: ذخیره کردن تسک به همراه تاریخ به عنوان یک آبجکت
        const newTask = { text: input, date: date || jalaliDate };
        setTasks([newTask, ...tasks]);

        setInput("");
        setDate("");
    }

    return (
        <>
            <div className="task-container">
                <p>دستنویس</p>
                <div>تاریخ امروز: {jalaliDate}</div>

                <div className="task-display">
                    {tasks.map((task, index) => (
                        <p key={index}>
                            تسک شماره {index + 1} : {task.text} {task.date}
                        </p>
                    ))}
                </div>

                <input 
                    type="text" 
                    className="task-input"
                    value={input}
                    placeholder="تسک را وارد کنید"
                    onChange={(e) => setInput(e.target.value)}
                />

                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} // به‌روزرسانی state تاریخ
                    className="task-date-input"
                />

                <button className="task-send-button" onClick={SendTaskHandler}>
                    ارسال
                </button>
            </div>
        </>
    );
}

export default Task;
