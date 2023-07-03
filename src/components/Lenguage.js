import React, { useState, useContext } from "react";
import "../css/lenguage.css";
import { FaAngleRight, FaAngleLeft, FaExternalLinkAlt } from "react-icons/fa";
import { StateContext } from "../SetContext";

export default function Lenguage() {
  const { skill } = useContext(StateContext);
  const [deg, setDeg] = useState(0);

  const handleLeft = () => {
    setDeg((deg) => deg + 45);
  };
  const handleRight = () => {
    setDeg((deg) => deg - 45);
  };

  return (
    <div className="lenguage">
      <h2 className="text titleCarousel">Linguaggi utilizzati:</h2>

      <div className="carouselContainer">
        <div className="left" onClick={handleLeft}>
          <FaAngleLeft />
        </div>
        <div className="wrapper">
          <div
            className="carousel"
            style={{ transform: "rotateY(" + deg + "deg)" }}
          >
            {skill.map((item, index) => {
              return (
                <article className="carouselCard" key={index}>
                  <div className="icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>

                  <h4>{item.title}</h4>

                  <button>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {" "}
                      <FaExternalLinkAlt />
                    </a>
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <div className="right" onClick={handleRight}>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}
