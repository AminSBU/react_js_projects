import React, {useEffect, useState} from "react";
import './Application.css'

const englishToPersianDigits = (str) => {
    const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return str.replace(/\d/g, (digit) => persianDigits[digit]);
};

function Application(){
    const number = 36;

    return(
        <>
            <div className="app-container">
                <p className="number-style">{englishToPersianDigits(number.toString())}</p>
            </div>
        </>
    );
}
export default Application;