import React from "react";

export default function Project(props) {
  return (
    <div className="row p-3">
      <div className="col-lg-6">
        <img
          src={props.image}
          alt={props.title}
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-lg-6 align-self-center">
        <h2 className="mb-4 mt-4">{props.title}</h2>
        <div className="mb-5 ps-5 pe-5">{props.text}</div>
        <a
          href={props.link}
          className="btn btn-outline-dark"
          target="_blank"
          rel="noreferrer"
        >
          Launch {props.title}
        </a>
      </div>
    </div>
  );
}
