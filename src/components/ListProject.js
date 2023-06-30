import React from "react";
import "../css/list-projects.css";
import { FaGithub, FaLink } from "react-icons/fa";
import phone from "../img/phone.png";
import where from "../img/where.jpg";

export default function ListProject() {
  return (
    <>
      <div className="listContainer">

        <div className="phone">
          <img src={phone} alt="" />
          <img src={where} alt="" />
        </div>
        <article className="projectDescription">
            <h3>WhereDoYouLive</h3>
            <p>App creata con lutilizzo di HTML,CSS e JavaScript.
                Tramite la ricerca per nome delle città viene mostrata 
                la qualità della vita e il punteggi della citta secondo la classifica di Teleport.</p> 
           <div className="linkProject">
            <a href='https://github.com/William-95/Where-DoYouLive.github.io' target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
              
                
                  <a href='https://where-doyoulive.netlify.app/' target="_blank" rel="noreferrer">
                    <FaLink />
                  </a>
            </div>
        </article>
      </div>
    </>
  );
}
