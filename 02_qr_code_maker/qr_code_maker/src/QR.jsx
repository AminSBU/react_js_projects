import React, {use, useState} from "react";

function QR()
{
    const[qr, setQR] = useState();
    const[temp, setTemp] = useState();

    fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example')
   .then(response => response.json()) 
   .then(data => console.log(data));

    function qrInputHandler(event){
        setTemp(event.target.value);
    }

    function clickHandler(event){
        setWord(temp)
    }

    return(
        <>
            <div>
                <input type="text" value={qr} onChange={qrInputHandler}></input>
                <button onClick={clickHandler}>make QR</button>
            </div>
        </>
    );
}
export  default QR;