import React from "react";
import Liana from "./liana-and-tuna.jpg";
import "./Header.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="Header container form-control pt-2 pb-5 mt-5 mb-2 shadow">
      <div className="d-flex justify-content-end">
        <a
          href="mailto: lianaginiat@gmail.com"
          className="btn btn-outline-dark"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/lianaginiat/"
          className="btn btn-outline-dark"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <img
            src={Liana}
            alt="Web-developer and her cat"
            className="img-thumbnail rounded-circle shadow me-5"
          />
        </div>
        <div>
          <h1>Liana Giniatullina</h1>
          <h2>front-end developer</h2>
        </div>
      </div>
    </div>
  );
}
