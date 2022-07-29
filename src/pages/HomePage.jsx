import React from 'react';
import { NavLink } from "react-router-dom";

// Importacion de componentes
import Footer from '../components/Footer';

// Importacion de imagenes
import Pizza1 from '../images/pizza-1.jpg';
import Restaurant1 from '../images/restaurant-1.jpg';
import PizzaHorno1 from '../images/pizza-horno-1.jpg';

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <article>
          <div id="carouselExampleCaptions" className="carousel slide d-flex justify-content-center" data-bs-ride="false">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Pizza1} className="d-block w-100" alt="pizza-1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                  <button type="submit" className="btn btn-success">
                    <NavLink
                      to="/reservaciones"
                      aria-current="page"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}
                    >
                      Reservar
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Restaurant1} className="d-block w-100" alt="restaurant-1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                  <button type="submit" className="btn btn-success">
                    <NavLink
                      to="/reservaciones"
                      aria-current="page"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}
                    >
                      Reservar
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <img src={PizzaHorno1} className="d-block w-100" alt="pizza-horno-1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                  <button type="submit" className="btn btn-success">
                    <NavLink
                      to="/reservaciones"
                      aria-current="page"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"}
                    >
                      Reservar
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;