import React from 'react';

// Importacion de componentes
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';

// Importacion de imagenes
import Pizza1 from '../images/pizza-1.jpg';
import Restaurant1 from '../images/restaurant-1.jpg';
import PizzaHorno1 from '../images/pizza-horno-1.jpg';

const HomePage = () => {
  return (
    <>
      <main className="mt-5">
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
                  <h2>Horarios</h2>
                  <h4>Martes a Domingo de 1:00 pm a 11:00 pm.</h4>
                </div>
              </div>
              <div className="carousel-item">
                <img src={Restaurant1} className="d-block w-100" alt="restaurant-1" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Ubicación</h2>
                  <h4>Polanco 405, Ciudad de México.</h4>
                </div>
              </div>
              <div className="carousel-item">
                <img src={PizzaHorno1} className="d-block w-100" alt="pizza-horno-1" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Pizzas al Horno</h2>
                  <h4>Pizzas hechas en horno de leña.</h4>
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
      <section>
        <Formulario />
      </section>
      <footer>
        <Footer />
      </footer>
      
    </>
  );
};

export default HomePage;