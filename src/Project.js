import React from "react";

export default function Project(props) {
  return (
    <div className="row p-3">
      <div className="col-sm-6">
        <img
          src={props.image}
          alt={props.text}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-sm-6 align-self-center">
        <h2>{props.title}</h2>
        <div>{props.text}</div>
        <a href={props.link} className="btn btn-outline-dark">
          Launch {props.title}
        </a>
      </div>
    </div>
  );
}
