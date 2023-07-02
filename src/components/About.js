import React, { useEffect, useRef } from "react";
import "../css/about.css";
import myImg from "../img/foto1.png";
import Typed from "typed.js";
export default function About() {
  const typedRef = useRef(null);
  const sectionRef = useRef(null);

  const startTyping = () => {
    const options = {
      strings: [
        "Il mio primo colpo di fulmine fu all'età di 12 anni con la prima frequentazione di un corso HTML, un interesse che è cresciuto esponenzialmente nel corso del tempo.<br> Con il passare degli anni e la voglia di ricerca di un'indipendenza economica ho accantonato questo mondo pur mantenendo viva la passione.<br> Ad oggi, con più maturità e consapevolezza, so che ho le capacità e la motivazione per far diventare la mia passione il mio lavoro.<br> Ho 27 anni, intuitivo, perfezionista ed estroverso.",
      ],
      typeSpeed: 30,

      loop: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  };

  useEffect(() => {
    let observer;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTyping();
          observer.unobserve(sectionRef.current);
        }
      });
    };

    observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    });

    const sectionNode = sectionRef.current; // Copy sectionRef.current to a variable
    observer.observe(sectionNode)

    return () => {
      if (observer) {
        observer.unobserve(sectionNode);
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="aboutContainer">
      <h2 className="text titleAbout"> Chi Sono</h2>
      <div className="about">
        <div className="myImg">
          <img src={myImg} alt="" />
        </div>

        <arcticle className="textSection" ref={sectionRef}>
          <span ref={typedRef}> </span>
          {/* <span ref={cursorRef} className="typed-cursor"></span> */}
        </arcticle>
      </div>
    </div>
  );
}
