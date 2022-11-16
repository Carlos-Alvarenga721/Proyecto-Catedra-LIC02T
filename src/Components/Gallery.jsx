import React from "react";
import "../Styles/gallery.css";
import parqueo from "../Styles/Images/Estacionamiento1.jpg";
import cocina from "../Styles/Images/Cocina.jpeg";
import baños from "../Styles/Images/bathroom.jpg";
import comedor from "../Styles/Images/Comedor Externo.jpeg";
import comedor2 from "../Styles/Images/ComedorInterno.jpg";

export default function Gallery() {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-4 pt-5 d-none d-md-block"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner d-flex align-items-center mt-2">
          <div className="carousel-item active">
            <img
              src={comedor}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Comedor Externo</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={comedor2}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Comedor Interno</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={parqueo}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Estacionamiento</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={cocina}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Cocina</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={baños}
              className="d-block ms-auto me-auto w-60 rounded"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block bg-primary rounded opacity-75">
              <h5 className="lighter">Baños</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mt-5 d-flex flex-column d-md-none justify-content-center align-content-center">
      <img src={comedor} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Comedor Externo</h1>

        <img src={comedor2} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Comedor Interno</h1>

        <img src={parqueo} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Estacionamiento</h1>
        
        <img src={cocina} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Cocina</h1>

        <img src={baños} alt="" className="py-2 rounded" />
        <h1 className="text-secondary">Baños</h1>
      </div>
    </div>
  );
}
