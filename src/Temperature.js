import React, { useState } from "react";
import axios from "axios";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [discription, setDiscription] = useState(null);
  let [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDiscription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }
  let image = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=d14a5f9f0440a82a056dfd79e5c778de&units=metric`;
  axios.get(url).then(showTemperature);

  return (
    <div>
      <div class="row">
        <div class="col" id="your_city">
          Your city
        </div>
        <div class="col-auto" id="show_yor_city">
          <h1>{props.city}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="img-weather">
            <img src={image} id="icon" alt="" />
          </div>
        </div>
        <div class="col-4" id="temperature">
          <lu>
            <li>Temperature:</li>
            <li>
              <span class="temperature-c-f">
                <strong>{temperature} </strong>
              </span>
              <span class="units">
                <a href="#" id="celcius-link" class="active">
                  C
                </a>{" "}
                |
                <a href="#" id="farengeit-link">
                  F
                </a>
              </span>
            </li>
          </lu>
        </div>
        <div class="col-4">
          <lu>
            <li>
              Humidity: <span id="humidity">{humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{wind}</span> km/h
            </li>
            <li id="discription">{discription}</li>
          </lu>
        </div>
      </div>
    </div>
  );
}
