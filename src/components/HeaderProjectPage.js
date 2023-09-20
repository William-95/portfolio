import React from "react";
import "../css/header-project-page.css";
import headerBg from "../img/bg15.jpg";
export default function HeaderProjectPage() {
  return (
    <header
      className="headerBg"
      style={{
        backgroundImage: `url(${headerBg})`,
        
      }}
    >
      <div className="textHeader2">
        <h1 className="text">Benvenuto,</h1>
        <h2 className="text">Questa sezione è dedicata ai progetti.</h2>
      </div>
    </header>
  );
}
