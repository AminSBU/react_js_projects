import React, {useState} from "react";

function MainForm(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return(
        <>
            <div className="main-form-container">
                <h2>Register/Login Form</h2>
                <input type="text" value={username} placeholder="type your username ..."></input>
                <input type="password" value={password} placeholder="type your password ..."></input>
            </div>
        </>
    );
}
export default MainForm;