import React, {useState} from "react";
import './header.css'

function Header()
{
    return(
    <>
        <div class="parent">
            <div class="div1"><button>home</button></div>
            <div class="div2"><button>Contact us</button></div>
            <div class="div3"><button>About us</button></div>
        </div>
    </>
    );
}
export default Header;