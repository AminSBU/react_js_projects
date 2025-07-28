import React, { useState } from "react";
import './QForm.css';

function QForm() {
  const CorrectAnswer = "Tokyo";
  const [result, setResult] = useState("");

  const checkAnswer = (answer) => {
    if (answer === CorrectAnswer) {
      setResult("پاسخ درست است!");
    } else {
      setResult("پاسخ غلط است!");
    }
  };

  return (
    <>
      <div className="quiz_container">
        <p className="quiz-question">What is the capital of Japan?</p>

        <div className="question">
          <button className="qbtn" onClick={() => checkAnswer('Tokyo')}>
            1. Tokyo
          </button>
        </div>

        <div className="question">
          <button className="qbtn" onClick={() => checkAnswer('Tehran')}>
            2. Tehran
          </button>
        </div>

        <div className="question">
          <button className="qbtn" onClick={() => checkAnswer('Seoul')}>
            3. Seoul
          </button>
        </div>

        <div className="question">
          <button className="qbtn" onClick={() => checkAnswer('Bangkok')}>
            4. Bangkok
          </button>
        </div>

        {/* نمایش نتیجه */}
        {result && <p className="result">{result}</p>}
      </div>
    </>
  );
}

export default QForm;