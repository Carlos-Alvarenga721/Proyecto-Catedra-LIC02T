import React from "react";
import "../Styles/bootstrap.min.css";
import hugo from "../Styles/Images/HugoFoto.jpeg";
import roberto from "../Styles/Images/Roberto Foto.jpeg";
import carlos from "../Styles/Images/CarlosFoto.jpeg";
import frank from "../Styles/Images/FrankFoto.jpeg";

export default function Developers() {
  return (
    <div className="mt-5 pt-5">
      <div className="mt-3">
        <div className="d-flex justify-content-around p-0 px-sm-5 mx-5 flex-wrap">
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={hugo}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Hugo Guevara
              </h5>
              <p className="card-text">Developer & Designer</p>
              <p className="card-text">hugoguevaralandaverde@gmail.com</p>
              <h6 className="card-text  p-2">El Salvador, San Salvador</h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={roberto}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Roberto Lopez
              </h5>
              <p className="card-text">Developer & Designer</p>
              <p className="card-text">robertolp349@gmail.com</p>
              <h6 className="card-text  p-2">El Salvador, San Salvador</h6>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around p-0 px-sm-5 mx-5 mt-4 flex-wrap">
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={frank}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Francisco Zaldaña
              </h5>
              <p className="card-text">Developer & Designer</p>
              <p className="card-text">franciscozaalvarez@gmail.com</p>
              <h6 className="card-text  p-2">El Salvador, San Salvador</h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src={carlos}
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-warning p-1">
                Carlos Alvarenga
              </h5>
              <p className="card-text">Developer & Designer</p>
              <p className="card-text">c.alvarenga.c7@gmail.com</p>
              <h6 className="card-text  p-2">El Salvador, San Salvador</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
