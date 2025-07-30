import React, {useState} from "react";
import './header.css'

function Header()
{
    return(
    <>
        <div class="parent">
            <div className="img-header"><img src="src/img/header.jpg" className="img-header"></img></div>
            <div class="div1"><button className="header-btn">home</button></div>
            <div class="div2"><button className="header-btn">Contact us</button></div>
            <div class="div3"><button className="header-btn">About us</button></div>
        </div>
    </>
    );
}
export default Header;