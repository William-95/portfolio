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
        "Sono di Roma e ho 28 anni, nel tempo libero mi piace praticare la pesca sportiva per essere a contatto con la natura e con il mare. Ho da sempre avuto un forte interesse per il mondo del web, ma ho dovuto metterlo da parte a causa di varie circostanze. Dopo dieci anni mi sono licenziato e ho deciso di cambiare, riprendere il controllo della mia vita e trasformare la mia passione per lo sviluppo web in lavoro. Pur avendo concluso un percorso completo da Full-Stack, la mia preferenza verte sul mondo del Front-End, mi permette di esprimere la mia creatività attraverso design e interfacce utente, mi piace affrontare sfide tecniche attraverso la risoluzione di problemi perché mi sento motivato a trovare sempre diverse soluzioni innovative che mi permettono di acquisire nuove abilità. Il Front-End è un campo in continua evoluzione che mi permette di apprendere e migliorare costantemente, così da soddisfare la curiosità che da sempre mi contraddistingue.",
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
    observer.observe(sectionNode);

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
        </arcticle>
      </div>
    </div>
  );
}
