import React from "react";
import "../css/header.css";
import "../css/App.css";
import myImg from "../img/foto1.png";
import headerBg from "../img/bg16.jpg";
export default function Header() {
  return (
    <header
      className="headerBg"
      style={{
        backgroundImage: `url(${headerBg})`,
      }}
    >
      <div className="headerMyImg ">
        <img src={myImg} alt="" />
      </div>

      <div className="textHeader">
        <h1 className="text">Ciao,</h1>
        <h2 className="text">Sono William Verga</h2>
        <h3 className="text">e sono un Web Developer.</h3>
      </div>
    </header>
  );
}
