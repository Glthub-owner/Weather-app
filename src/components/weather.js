import React from "react";
const setPicture = (weather) => {
  if (weather === "Clear") {
    return (
      <img
        typeof="foaf:Image"
        src="https://developer.accuweather.com/sites/default/files/01-s.png"
        width="165"
        height="95"
        alt="Sunny"
        title="Sunny"
      ></img>
    );
  } else if (weather === "Cloudy" || weather === "Clouds") {
    return (
      <img
        typeof="foaf:Image"
        src="https://developer.accuweather.com/sites/default/files/07-s.png"
        width="165"
        height="95"
        alt="Cloudy"
        title="Cloudy"
      ></img>
    );
  } else if (weather === "Rain") {
    return (
      <img
        typeof="foaf:Image"
        src="https://developer.accuweather.com/sites/default/files/12-s.png"
        width="165"
        height="95"
        alt="Showers"
        title="Showers"
      ></img>
    );
  }
};
function Weather({ name, main, coord, weather }) {
  return (
    <div className="weather-container">
      <div className="weather-container-child">
        <h3 className="header-text">Current Weather in {name}</h3>

        <div className="center-container">
          <div className="weatherPicture">{setPicture(weather[0].main)}</div>
          <div className="condition">
            <h1>{main.temp}°C</h1>
            <h3>{weather[0].main}</h3>
          </div>
        </div>
        <h4 className="coordinates">
          lon: {coord.lon} lat: {coord.lat}
        </h4>
      </div>
    </div>
  );
}

export default Weather;
