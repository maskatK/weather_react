import React from "react";

import "./Add.css";
import Search from "./Search";

import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="cont_weather_and_search">
      <div className="container">
        <Search />
      </div>
      <footer>
        <p>
    <a href="https://github.com/maskatK/weather_react.git">My GitHub repositopy</a>
    </p>
      </footer>
    </div>
  );
}
