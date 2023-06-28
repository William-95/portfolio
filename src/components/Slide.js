import React from "react";
import "../css/slide.css";
import oasis from "../img/oasis.jpg";
import enjoy from "../img/enjoy.jpg";
import where from "../img/where.jpg";
export default function Slide() {
  return (
    
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={where} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={oasis} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={enjoy} class="d-block w-100" alt="" />
          </div>
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
  );
}
