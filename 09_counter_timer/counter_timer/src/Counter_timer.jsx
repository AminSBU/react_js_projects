import React, { useState, useEffect, useRef } from "react";

function Counter_Timer() {
  const [second, setSecond] = useState(0);
  const intervalRef = useRef(null); // Store interval ID

  // Start the timer
  const StartInterval = () => {
    // Clear any existing interval to prevent multiple intervals
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval
    intervalRef.current = setInterval(() => {
      setSecond((prevCounter) => {
        if (prevCounter >= 15) {
          clearInterval(intervalRef.current); // Stop interval at 15
          intervalRef.current = null;
          return 0; // Reset to 0
        }
        return prevCounter + 1;
      });
    }, 1000);
  };

  // Stop and reset the timer
  const StopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval
      intervalRef.current = null;
    }
    setSecond(0); // Reset counter
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear interval on unmount
      }
    };
  }, []);

  return (
    <div className="items_container">
      <p>{second}</p>
      <button onClick={StartInterval}>Start</button>
      <button onClick={StopInterval}>Stop</button>
    </div>
  );
}

export default Counter_Timer;