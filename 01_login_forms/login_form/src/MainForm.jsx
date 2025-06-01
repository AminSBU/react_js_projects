import React, {useState} from "react";
import './MainForm.css'

function MainForm(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        alert(data.message);
    };

    return(
        <>
            <div className="main-form-container">
                <h2 className="text-login">Register/Login Form</h2>
                <div className="username-container">
                    <input type="text" id="username" className="username" value={username} placeholder="type your username ..."></input>
                </div>
                <div className="password-container">
                    <input type="password" id="password" className="password" value={password} placeholder="type your password ..."></input>
                </div>
                <div className="send-button-container">
                    <button className="sendButton" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    );
}
export default MainForm;