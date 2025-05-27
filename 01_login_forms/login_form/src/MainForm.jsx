import React, {useState} from "react";

function MainForm(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return(
        <>
            <div className="main-form-container">
                <h2>Register/Login Form</h2>
                <div className="username">
                    <label for="username">Username: </label>
                    <input type="text" id="username" value={username} placeholder="type your username ..."></input>
                </div>
                <div className="password">
                    <label for="password">Password: </label>
                    <input type="password" value={password} placeholder="type your password ..."></input>
                </div>
            </div>
        </>
    );
}
export default MainForm;