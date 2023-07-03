import React from "react";
import headerBg from "../img/header3.jpg";
import error from "../img/error.png";
import "../css/error.css";

export default function Error() {
  return (
    <>
      

      <div className="error"  style={{
          backgroundImage: `url(${headerBg})`,
        }}>
        <img src={error} className="errorImg" alt="" />
        <h4>Abbiamo riscontrato un errore, prova:</h4>
        <ol>
          <li>Controlla la tua connessione</li>
          <li>Ricarica la pagina</li>
        </ol>
      </div>
    </>
  );
}
