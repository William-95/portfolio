import React from "react";
import "../css/projects.css";
import { FaGithub, FaLink } from "react-icons/fa";
import oasis from "../img/oasis.png";
import enjoy from "../img/enjoy.png";
import where from "../img/where.png";
export default function Slide() {
  let state = {
    project: [
      {
        img: where,
        title: "WhereDoYouLive",
        link: "https://where-doyoulive.netlify.app/",
        gitHub: "https://github.com/William-95/Where-DoYouLive.github.io",
      },
      {
        img: enjoy,
        title: "EnjoyVeg",
        link: "https://enjoyveg.netlify.app/",
        gitHub: "https://github.com/William-95/EnjoyVeg",
      },
      {
        img: oasis,
        title: "Oasis",
        link: "https://oasis-23.netlify.app",
        gitHub: "https://github.com/William-95/Oasis",
      },
    ],
  };

  return (
    <>
    <div className="project">
     <h2 className="text titleProject">Progetti eseguiti durante il percorso di studi:</h2>

      <div className="projectContainer">
        {state.project.map((item, index) => {
          return (
            <article className="projectCard" key={index}>
              <img src={item.img} alt="" />
              <h4>{item.title}</h4>
              <div className="cardLink">
                
                  <a href={item.gitHub} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
              
                
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <FaLink />
                  </a>
               
              </div>
            </article>
          );
        })}
      </div>
      </div>
    </>
  );
}
