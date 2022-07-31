import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="container">
              <footer className="py-5">
                <div className="row">
                  <div className="col-2">
                    <h5 className="texto">Pizza Prime</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2"><NavLink to="/" className="texto nav-link p-0 text-muted">Inicio</NavLink></li>
                      <li className="nav-item mb-2"><NavLink to="/reservaciones" className="texto nav-link p-0 text-muted">Reservaciones</NavLink></li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <h5 className="texto">FAQs</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2"><NavLink to="/" className="texto nav-link p-0 text-muted">FAQs</NavLink></li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <h5 className="texto">Nosotros</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2"><NavLink to="/nosotros" className="texto nav-link p-0 text-muted">Sobre nosotros</NavLink></li>
                    </ul>
                  </div>
                  <section className="col-4 offset-1">
                      <h3 className="texto">Contacto</h3>
                      <h5 className="texto">Teléfono +1 (555) 123-4567</h5>                    
                      <h5 className="texto">contacto@correo.com</h5>                    
                  </section>
                </div>
                <div className="d-flex justify-content-between py-4 my-4 border-top">
                  <p>© 2022 Pizza Prime Company, Inc. Todos los derechos reservados.</p>
                </div>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;