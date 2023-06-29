import React,{useState} from 'react'
import '../css/lenguage.css'
import { FaAngleRight, FaAngleLeft,FaExternalLinkAlt} from "react-icons/fa";
import {IoLogoHtml5,IoLogoCss3 }from"react-icons/io"
import { SiPhp,SiMysql, SiLaravel,SiSass,SiJavascript,SiReact} from "react-icons/si";



export default function Lenguage() {
    const [deg, setDeg] = useState(0);

let state={
    skill:[
       {
        icon: <IoLogoHtml5/>,
        color:'#e34c26',
        title:'HTML5',
        link:'https://www.html.it/guide/guida-html5/'
       },
       {
        icon: <IoLogoCss3/>,
        color:'#264de4',
        title:'CSS3',
        link:'https://www.html.it/guide/guida-css3/'
       },
       {
        icon: <SiJavascript/>,
        color:'#264de4',
        title:'JS',
        link:'https://it.javascript.info/'
       },
       {
        icon: <SiSass/>,
        color:'#cc6699',
        title:'Sass',
        link:'https://sass-lang.com/'
       },
       {
        icon: <SiReact/>,
        color:'#88dded',
        title:'React.js',
        link:'https://legacy.reactjs.org/'
       },
       {
        icon: <SiPhp/>,
        color:'#8993be',
        title:'PHP',
        link:'https://phptherightway.com/'
       },
       {
        icon: <SiMysql/>,
        color:'#F29111',
        title:'MySql',
        link:'https://www.mysql.com/it/'
       },
       {
        icon: <SiLaravel/>,
        color:'#fb503b',
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
            {state.skill.map((item,index) => {
              return (
                <article className="carouselCard" key={index}>
                    <div className='icon' style={{color:item.color}}>{item.icon}</div>
                  

                  <h4>{item.title}</h4>

                  <button><a href={item.link} target='_blank' rel="noreferrer"> <FaExternalLinkAlt/></a></button>
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
