import React from "react";
import Project from "./Project";
import reactWeather from "./react-weather.png";
import reactDictionary from "./react-dictionary.png";
import vanillaWeather from "./vanilla-weather.png";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio container form-control shadow mb-5">
      <Project
        image={reactDictionary}
        title={"React Dictionary App"}
        text={
          "This application was created in React as one of the final projects for SheCodes React. Unit conversion is what I am most proud of. No instructions were provided on how to build a unit converter for the weather forecast, so this was something I learned to do by myself."
        }
        link={"https://clever-euclid-7fc23a.netlify.app/"}
      />
      <hr />
      <Project
        image={reactWeather}
        title={"React Weather App"}
        text={
          "This application was created in React as one of the final projects for SheCodes React. Unit conversion is what I am most proud of. No instructions were provided on how to build a unit converter for the weather forecast, so this was something I learned to do by myself."
        }
        link={"https://sad-shirley-59ca0d.netlify.app/"}
      />
      <hr />
      <Project
        image={vanillaWeather}
        title={"Vanilla JS Weather App"}
        text={
          "This application was created in React as one of the final projects for SheCodes React. Unit conversion is what I am most proud of. No instructions were provided on how to build a unit converter for the weather forecast, so this was something I learned to do by myself."
        }
        link={"https://condescending-murdock-456aa0.netlify.app"}
      />
    </div>
  );
}
