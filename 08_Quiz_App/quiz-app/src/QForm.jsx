import React, {useState} from "react";
import './QForm.css'

function QForm()
{
    return(
        <>
            <div className="quiz_container"> 
                <p className="quiz-question">Test</p>
                <div className="question"><button className="qbtn">1. Tokyo</button></div>
                <div className="question"><button className="qbtn">2. Tehran</button></div>
                <div className="question"><button className="qbtn">3. Seoul</button></div>
                <div className="question"><button className="qbtn">4. Bnghkok</button></div>
            </div>
        </>
    );
}
export default QForm;
