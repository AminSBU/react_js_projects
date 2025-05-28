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
                    <label for="username">Username: </label>
                    <input type="text" id="username" className="username" value={username} placeholder="type your username ..."></input>
                </div>
                <div className="password-container">
                    <label for="password">Password: </label>
                    <input type="password" id="password" className="password" value={password} placeholder="type your password ..."></input>
                </div>
            </div>
        </>
    );
}
export default MainForm;