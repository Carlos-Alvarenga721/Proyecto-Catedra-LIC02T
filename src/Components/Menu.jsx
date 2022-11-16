import React from "react";
import "../Styles/bootstrap.min.css";
import "../Styles/cards.css";

export default function Menu() {
  return (
    <div className="bg-primary">
      <div className="bg-primary">
        <h3 className="mt-5 pt-5 px-5 text-info">
          Entradas
          <div className="line mt-2"></div>
        </h3>
        <div
          className="d-flex justify-content-around p-0 px-sm-5 mx-5 flex-wrap"
          id="wrapper"
        >
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="https://p0.pikist.com/photos/661/255/eat-salad-starter-beetroot-oranges-cream-cheese-nuts-dates-cheese-basket.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 text-danger p-1">
                Canasta de queso 
              </h5>
              <h5 className="card-text">$4.00</h5>
              <h6 className="card-text text-warning p-2">
                Disponible en delivery
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="https://www.gourmet.cl/wp-content/uploads/2017/10/carpaccio-salmon-507x458.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Carpaccio de Salmon 
              </h5>
              <h5 className="card-text">$6.00</h5>
              <h6 className="card-text text-warning p-2">
                No disponible en delivery
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="https://recetastips.com/wp-content/uploads/2020/06/crema-de-esparragos-con-papa.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Crema de Esparragos 
              </h5>
              <h5 className="card-text">$3.50</h5>
              <h6 className="card-text text-warning p-2">
                No disponible en delivery
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="https://www.divinacocina.es/wp-content/uploads/timbal-de-brocoli-patatas-3.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Timbal de brocoli 
              </h5>
              <h5 className="card-text">$4.00</h5>
              <h6 className="card-text text-warning p-2">
                Disponible en delivery
              </h6>
            </div>
          </div>
          <div
            className="card mt-5 pt-5 rounded bg-dark lighter"
            style={{ width: "11rem" }}
          >
            <img
              className="card-img-top img-circle rounded-circle"
              src="https://buenazo.cronosmedia.glr.pe/original/2020/09/21/5f693c0082a49027727efc8f.jpg"
              alt="Card image cap"
            />
            <div className="card-block text-center">
              <h5 className="card-title mt-4 p-1 text-danger">
                Aguacate Relleno
              </h5>
              <h5 className="card-text">$2.75</h5>
              <h6 className="card-text text-warning p-2">
                Disponible en delivery
              </h6>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-5 pt-5 px-5 text-info">
        Bebidas
        <div className="line mt-2"></div>
      </h3>
      <div
        className="d-flex justify-content-around p-0 px-sm-5 mx-5 mb-5 flex-wrap"
        id="wrapper"
      >
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://www.wikihow.com/images/thumb/5/57/Make-Pink-Lemonade-Step-4.jpg/v4-728px-Make-Pink-Lemonade-Step-4.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 text-danger p-1">
              Limonada Rosa </h5>
            <h5 className="card-text">$3.00</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://img.freepik.com/fotos-premium/soda-italiana-vaso-plastico-aislado-sobre-fondo-blanco_38172-574.jpg?w=2000"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">
              Soda Italiana Cereza</h5>
            <h5 className="card-text">$3.00</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://www.cardamomo.news/__export/1658950850572/sites/debate/img/2022/07/27/limonada-mineral_x2x.jpeg_423682103.jpeg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Hierbabuena y limon</h5>
            <h5 className="card-text">$2.75</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://t2.rg.ltmcdn.com/es/posts/4/6/5/sangria_ligera_32564_orig.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Sangria de frutas</h5>
            <h5 className="card-text">$3.00</h5>
            <h6 className="card-text text-warning p-2">
              No disponible en delivery
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://images.hola.com/imagenes/cocina/recetas/20210616191542/te-helado-de-naranja/0-964-814/foto-adobe-te-naranja-m.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Te Helado de Lima</h5>
            <h5 className="card-text">$2.50</h5>
            <h6 className="card-text text-warning p-2">
              No disponible en delivery
            </h6>
          </div>
        </div>
      </div>
      <h3 className="mt-5 pt-5 px-5 text-info">
        Platillos fuertes
        <div className="line mt-2"></div>
      </h3>
      <div
        className="d-flex justify-content-around p-0 px-sm-5 mx-5 mb-5 flex-wrap"
        id="wrapper"
      >
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://hips.hearstapps.com/hmg-prod/images/delish-filet-mignon-horizontal-1541189043.jpeg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 text-danger p-1">Filete Mignon a la parrilla</h5>
            <h5 className="card-text">$15.25</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://statics-cuidateplus.marca.com/cms/paella-valenciana-receta.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Paella Valenciana</h5>
            <h5 className="card-text">$8.99</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://images-gmi-pmc.edge-generalmills.com/bdf8ef2c-d238-4ef2-aff4-bda3220a9561.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Pasta Alfredo </h5>
            <h5 className="card-text">$6.50</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://cdn2.cocinadelirante.com/sites/default/files/images/2018/08/camarones-ala-diabla.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Camarones Picanto </h5>
            <h5 className="card-text">$10.99</h5>
            <h6 className="card-text text-warning p-2">
              No disponible en delivery
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://i.ytimg.com/vi/pGx9w2GJ_mc/maxresdefault.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Pollo Agridulce</h5>
            <h5 className="card-text">$8.60</h5>
            <h6 className="card-text text-warning p-2">
              No disponible en delivery
            </h6>
          </div>
        </div>
      </div>
      <h3 className="mt-5 pt-5 px-5 text-info">
        Postres
        <div className="line mt-2"></div>
      </h3>
      <div
        className="d-flex justify-content-around p-0 px-sm-5 mx-5 mb-5 flex-wrap"
        id="wrapper"
      >
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://static.guiainfantil.com/pictures/recetas2/4000/4210-4-crepes-con-frutas-merienda-sana-para-los-ninos.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 text-danger p-1">Creppe Dulce</h5>
            <h5 className="card-text">$4.5</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://images.hola.com/imagenes/cocina/recetas/20200130159337/mousse-chocolate-postre-facil/0-776-92/mousse-chocolate-facil-rapido-teka-m.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Mouse Black </h5>
            <h5 className="card-text">$3.50</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANG5DC9Y6KHM7kwgAf_dy3lgnrndXRlv2Dg&usqp=CAU"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Panna Cotta </h5>
            <h5 className="card-text">$5.00</h5>
            <h6 className="card-text text-warning p-2">Disponible en delivery</h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://badun.nestle.es/imgserver/v1/80/1290x742/tartaletas-de-crema-de-chocolate-blanco-y-frutos-rojos.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">Tartaleta</h5>
            <h5 className="card-text">$3.75</h5>
            <h6 className="card-text text-warning p-2">
              No disponible en delivery
            </h6>
          </div>
        </div>
        <div
          className="card mt-5 pt-5 rounded bg-dark lighter"
          style={{ width: "11rem" }}
        >
          <img
            className="card-img-top img-circle rounded-circle"
            src="https://static.onecms.io/wp-content/uploads/sites/21/2015/02/11/cheesecake-facil-con-leche-condensada-2000.jpg"
            alt="Card image cap"
          />
          <div className="card-block text-center">
            <h5 className="card-title mt-4 p-1 text-danger">cheesecake</h5>
            <h5 className="card-text">$4.50</h5>
            <h6 className="card-text text-warning p-2">
              No disponible en delivery
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
