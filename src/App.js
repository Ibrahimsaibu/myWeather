import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";

import CityComponent from "./components/cityComponent";
import WeatherComponent from "./components/moreWeatherInfo";
import sunny from "./icons/sunny.svg";
import night from "./icons/night.svg";
import day from "./icons/day.svg";
import cloudyNight from "./icons/cloudy-night.svg";
import cloudy from "./icons/cloudy.svg";
import perfectDay from "./icons/perfect-day.svg";
import rain from "./icons/rain.svg";
import rainNight from "./icons/rain-night.svg";
import storm from "./icons/storm.svg";

export const WeatherIcons = {
  "01d": sunny,
  "01n": night,
  "02d": day,
  "02n": cloudyNight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfectDay,
  "04n": cloudyNight,
  "09d": rain,
  "09n": rainNight,
  "10d": rain,
  "10n": rainNight,
  "11d": storm,
  "11n": storm,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb8ada88cdb705a8e82f26553da9880e`
    );
    setWeather(response.data);
  };
  return (
    <div className="App">
      <Container>
        <AppLabel>myWeather</AppLabel>
        {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
        ) : (
          <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
        )}
      </Container>
    </div>
  );
}

export default App;
