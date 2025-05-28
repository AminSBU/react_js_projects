import React, {useState} from "react";
import './MainForm.css'

function MainForm(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return(
        <>
            <div className="main-form-container">
                <h2>Register/Login Form</h2>
                <div className="username-container">
                    <input type="text" id="username" className="username" value={username} placeholder="type your username ..."></input>
                </div>
                <div className="password-container">
                    <input type="password" id="password" className="password" value={password} placeholder="type your password ..."></input>
                </div>
                <div className="send-button-container">
                    <button className="sendButton">Login</button>
                </div>
            </div>
        </>
    );
}
export default MainForm;