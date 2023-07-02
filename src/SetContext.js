import React,{ useState }from 'react';
import {IoLogoHtml5,IoLogoCss3 }from"react-icons/io"
import { SiPhp,SiMysql, SiLaravel,SiSass,SiJavascript,SiReact} from "react-icons/si";
import where from "./img/phone1.png";
import enjoy from "./img/phone2.png";
import oasis from "./img/phone3.png";
import ScrollReveal from 'scrollreveal';


export const StateContext=React.createContext();

export default function SetContext({children}) {
// state skil
const[skill]=useState([
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
    color:'#F0DB4F',
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

]);
// end state skill


// state projects
const[project]=useState([
  {
    id: 0,
    img: where,
    name: "WhereDoYouLive",
    summary:
      "App creata con l'utilizzo di HTML,CSS e JavaScript.Tramite la ricerca per nome delle città viene mostrata la qualità della vita e il punteggi della città secondo la classifica di Teleport.",
    git: "https://github.com/William-95/Where-DoYouLive.github.io",
    link: "https://where-doyoulive.netlify.app/",
  },
  {
    id: 1,
    img: enjoy,
    name: "EnjoyVeg",
    summary:
      "App creata con l'utilizzo di HTML,CSS, JavaScript e React.js. App utilizzata per la ricerca di ricette vegetariane attraverso l'applicazione di filtri in base alle proprie preferenze.",
    git: "https://github.com/William-95/Where-DoYouLive.github.io",
    link: "https://where-doyoulive.netlify.app/",
  },
  {
    id: 2,
    img: oasis,
    name: "Oasis",
    summary:
      "App creata con l'utilizzo di HTML,CSS, React.js e Laravel. Effettuato il login/registrazione è possibile visionare i cani abbandonati nei vari canili nazionale, l'inserimento di essi nei database o la ricerca di un singolo cane tramite microchip.",
    git: "https://github.com/William-95/Where-DoYouLive.github.io",
    link: "https://where-doyoulive.netlify.app/",
  },
])
// end state project

// scroll
ScrollReveal({
  reset:true,
  distance:'80px',
  duration:2000,
  delay:200
 });
//  useEffect(()=>{
//   ScrollReveal().reveal('.headerMyImg,.titleProject,.textHeader2',{origin:'top'});
//   ScrollReveal().reveal('.projectCard,.formContainer',{origin:'bottom'})
//   ScrollReveal().reveal('.textHeader,.titleCarousel,.listContainer',{origin:'left'})
//   ScrollReveal().reveal('.carouselContainer,.reverse',{origin:'right'})

// },[])
//  end Scroll


  return (
   <>
   <StateContext.Provider
   value={{
    skill,
    project
   }}
   >
    {children}
   </StateContext.Provider>
   </>
  )
}
