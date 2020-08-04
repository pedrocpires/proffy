import React from "react";

import "./styles.css";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyicon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

function Lading() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <a href="/" className="study">
            <img src={studyicon} alt="Estudar" />
            Estudar
          </a>
          <a href="/" className="give-classes">
            <img src={giveClassesIcon} alt="" />
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conecções já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Lading;
