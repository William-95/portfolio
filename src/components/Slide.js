import React from "react";
import "../css/slide.css";
import oasis from "../img/oasis.jpg";
import enjoy from "../img/enjoy.jpg";
import where from "../img/where.jpg";
export default function Slide() {
    let state = {
        project: [
            {
                img:where,
                title:'WhereDoYouLive',
                link:'https://where-doyoulive.netlify.app/',
                gitHub:'https://github.com/William-95/Where-DoYouLive.github.io'
            },
            {
                img:enjoy,
                title:'EnjoyVeg',
                link:'https://enjoyveg.netlify.app/',
                gitHub:'https://github.com/William-95/EnjoyVeg'
            },
            {
                img:oasis,
                title:'Oasis',
                link:'https://oasis-23.netlify.app',
                gitHub:'https://github.com/William-95/Oasis'
            },
        ]}
//   <div class="carousel-item active">
//             <img src={where} class="d-block w-100" alt="" />
//           </div>
//           <div class="carousel-item">
//             <img src={oasis} class="d-block w-100" alt="" />
//           </div>
//           <div class="carousel-item">
//             <img src={enjoy} class="d-block w-100" alt="" /> 
//         </div>
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
        {state.project.map((item, index) => {

if (index === 0) {
    return (
      <div className="carousel-item active" key={index}>
        <img src={item.img} className="d-block w-100" alt="" />
        <h3>{item.title}</h3>
        <button>
          <a href={item.link} target="_blank" rel="noreferrer">
            Altro
          </a>
        </button>
        <button>
          <a href={item.gitHub} target="_blank" rel="noreferrer">
            Altro
          </a>
        </button>
      </div>
    );
  }
          return (
            
            <div class="carousel-item" key={index}>
            <img src={item.img} class="d-block w-100" alt="" />
            <h3>{item.title}</h3>
                       

              <button >
                <a href={item.link} target="_blank" rel="noreferrer">
                  Altro
                </a>
              </button>
              <button >
                <a href={item.gitHub} target="_blank" rel="noreferrer">
                  Altro
                </a>
              </button>
            </div>
            
          );
        })}
         
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </>
  );
}
