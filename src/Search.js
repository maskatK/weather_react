import React, { useState } from "react";

import "./Add.css";
import Temperature from "./Temperature";

export default function Search() {
  let [fail, setShow] = useState("");
  let [town, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function failTemperature(event) {
    event.preventDefault();

    setShow(<Temperature city={town} />);
  }

  return (
    <div class="row">
      <form onSubmit={failTemperature}>
        <div class="input-group mb-3">
          <input
            type="search"
            onChange={updateCity}
            class="form-control"
            id="serch_city"
            placeholder="Type of city"
            autocomplete="off"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Send
          </button>
        </div>
      </form>
      {fail}
    </div>
  );
}
