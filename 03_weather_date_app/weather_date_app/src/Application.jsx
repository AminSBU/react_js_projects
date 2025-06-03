import React, {useEffect, useState} from "react";
import './Application.css'

const englishToPersianDigits = (str) => {
    const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return str.replace(/\d/g, (digit) => persianDigits[digit]);
};



function Application(){
    const number = 36;

    const [weather, setWeather] = useState(null);

    useEffect(() => {
    const url = `http://api.weatherapi.com/v1/current.json?key=a51baaa6f2214379b36212509252203&q=Tehran&aqi=no`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        console.log('Weather forecast:', data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

    return(
        <>
            

            <div className="weather-container">
                {weather ? (
                <>
                    <p>Location: {weather.location.name}</p>
                    <p>Temperature: {weather.current.temp_c} °C</p>
                    <p>Condition: {weather.current.condition.text}</p>

                    {weather.current.temp_c < 30 ? (
                        <img src='./img/partly_cloudy_weather_with_the_sun.png' className="pcws"/>
                    ) : (
                        <img src='./img/showers_with_sun.png' className="pcws" />
                    )}
                </>
                ) : (
                <p>Loading weather...</p>
                )}
            </div>
        </>
    );
}
export default Application;