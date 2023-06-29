import React,{useState} from 'react'
import { FaAngleRight, FaAngleLeft,FaExternalLinkAlt} from "react-icons/fa";
import {IoLogoHtml5,IoLogoCss3 }from"react-icons/io"
import { SiPhp,SiMysql, SiLaravel,SiSass,SiJavascript,SiReact} from "react-icons/si";

import '../css/lenguage.css'

export default function Lenguage() {
    const [deg, setDeg] = useState(0);

let state={
    skill:[
       {
        icon: IoLogoHtml5,
        title:'HTML5',
        link:'https://www.html.it/guide/guida-html5/'
       },
       {
        icon: IoLogoCss3,
        title:'CSS3',
        link:'https://www.html.it/guide/guida-css3/'
       },
       {
        icon: SiJavascript,
        title:'JS',
        link:'https://it.javascript.info/'
       },
       {
        icon: SiSass,
        title:'Sass',
        link:'https://sass-lang.com/'
       },
       {
        icon: SiReact,
        title:'React.js',
        link:'https://legacy.reactjs.org/'
       },
       {
        icon: SiPhp,
        title:'PHP',
        link:'https://phptherightway.com/'
       },
       {
        icon: <SiMysql/>,
        title:'MySql',
        link:'https://www.mysql.com/it/'
       },
       {
        icon: <SiLaravel/>,
        title:'Laravel',
        link:'https://laravel.com/'
       }
    ]
}

const handleLeft = () => {
    setDeg((deg) => deg + 45);
  };
  const handleRight = () => {
    setDeg((deg) => deg - 45);
  };


  return (
    <>
      <div className="carouselContainer">
        <div className="left" onClick={handleLeft}>
          <FaAngleLeft />
          
        </div>
        <div className="wrapper">
          <div
            className="carousel"
            style={{ transform: "rotateY(" + deg + "deg)" }}
          >
            {state.skill.map((item) => {
              return (
                <article className="carouselCard" key={item.id}>
                    <div className='icon'>{item.icon}</div>
                  

                  <h4 className="carouselTilte">{item.name}</h4>

                  <button><a href={item.link}> <FaExternalLinkAlt/></a></button>
                </article>
              );
            })}
          </div>
        </div>

        <div className="right" onClick={handleRight}>
          <FaAngleRight />
        </div>
      </div>
    </>
  )
}
