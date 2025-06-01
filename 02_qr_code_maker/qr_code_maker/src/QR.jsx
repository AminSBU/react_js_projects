import React, {use, useState} from "react";

function QR()
{
    const[qr, setQR] = useState();
    const[temp, setTemp] = useState();

    function qrInputHandler(event){
        setTemp(event.target.value);
    }

    return(
        <>
            <div>
                <input type="text" value={qr} onChange={qrInputHandler}></input>
                <button>make QR</button>
            </div>
        </>
    );
}
export  default QR;