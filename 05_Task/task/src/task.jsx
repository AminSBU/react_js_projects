import React, { useState } from "react";
import './task.css';
import moment from 'jalali-moment';

function Task() {
    const [tasks, setTasks] = useState([]); 
    const [input, setInput] = useState("");
    const [date, setDate] = useState(""); // تاریخ انتخابی

    const now = moment().locale('fa'); 
    const jalaliDate = now.format('jYYYY/jMM/jDD');

    function SendTaskHandler() {
        if (input.trim() === "") return;

        // اگر تاریخ انتخاب نشده بود، از تاریخ امروز جلالی استفاده می‌کنیم
        const taskDate = date ? moment(date).locale('fa').format('jYYYY/jMM/jDD') : jalaliDate;

        const newTask = { text: input, date: taskDate };
        setTasks([newTask, ...tasks]);

        setInput("");
        setDate("");
    }

    return (
        <>
            <div className="task-container">
                <p>دستنویس</p>
                <div>تاریخ امروز: {jalaliDate}</div>

                {/* جدول نمایش تسک ها */}
                <table className="task-table" border="1" style={{ width: "100%", borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>شماره تسک</th>
                            <th>تاریخ</th>
                            <th>متن تسک</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td style={{ textAlign: "center" }}>{index + 1}</td>
                                <td style={{ textAlign: "center" }}>{task.date}</td>
                                <td>{task.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <input 
                    type="text" 
                    className="task-input"
                    value={input}
                    placeholder="تسک را وارد کنید"
                    onChange={(e) => setInput(e.target.value)}
                    style={{ marginTop: '10px', width: '60%' }}
                />

                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    className="task-date-input"
                    style={{ marginLeft: '10px' }}
                />

                <button 
                    className="task-send-button" 
                    onClick={SendTaskHandler}
                    style={{ marginLeft: '10px' }}
                >
                    ارسال
                </button>
            </div>
        </>
    );
}

export default Task;