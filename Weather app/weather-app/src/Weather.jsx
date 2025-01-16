import React, { useState } from "react";
import './Weather.css'
const api = {
  key: "93b36e265743d9bea0b0e5bf064cd108",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            value={query}
            placeholder="Search......"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={search} // Use onKeyDown instead of onKeyPress
          />
        </div>
        {weather.main && ( // Only render weather data if it exists
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Weather;
