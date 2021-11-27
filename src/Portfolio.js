import React from "react";
import reactWeather from "./react-weather.png";
import reactDictionary from "./react-dictionary.png";
import vanillaWeather from "./vanilla-weather.png";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio container form-control shadow">
      <div className="row p-3">
        <div className="col-sm-6">
          <img
            src={reactDictionary}
            alt="React Weather App"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-sm-6 align-self-center">
          <h2>React Dictionary App</h2>
          <div>
            This application was created in React as one of the final projects
            for SheCodes React. Unit conversion is what I am most proud of. No
            instructions were provided on how to build a unit converter for the
            weather forecast, so this was something I learned to do by myself.
          </div>
          <a
            href="https://clever-euclid-7fc23a.netlify.app/"
            className="btn btn-outline-dark"
          >
            Launch Dictionary App
          </a>
        </div>
      </div>
      <hr />
      <div className="row p-3">
        <div className="col-sm-6 align-self-center">
          <img
            src={reactWeather}
            alt="React Weather App"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-sm-6 align-self-center">
          <h2>React Weather App</h2>
          <div>
            This application was created in React as one of the final projects
            for SheCodes React. Unit conversion is what I am most proud of. No
            instructions were provided on how to build a unit converter for the
            weather forecast, so this was something I learned to do by myself.{" "}
          </div>
          <a
            href="https://sad-shirley-59ca0d.netlify.app/"
            className="btn btn-outline-dark"
          >
            Launch Weather App
          </a>
        </div>
      </div>
      <hr />
      <div className="row p-3">
        <div className="col-sm-6 align-self-center">
          <img
            src={vanillaWeather}
            alt="React Weather App"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-sm-6 align-self-center">
          <h2>Vanilla JS Weather App</h2>
          <div>
            This application was created in React as one of the final projects
            for SheCodes React. Unit conversion is what I am most proud of. No
            instructions were provided on how to build a unit converter for the
            weather forecast, so this was something I learned to do by myself.{" "}
          </div>
          <a
            href="https://condescending-murdock-456aa0.netlify.app/"
            className="btn btn-outline-dark"
          >
            Launch Vanilla JS Weather App
          </a>
        </div>
      </div>
    </div>
  );
}
