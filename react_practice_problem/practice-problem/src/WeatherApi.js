//Develop a weather app that fetches and displays weather information based on a user's location
import React, { useEffect, useState } from 'react';

const WeatherApi = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=53cbf6b7bd02a2df9591c91dca9a2b85&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Log the weather data to the console
            setWeather(data);
          });
      });
    }
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApi;
