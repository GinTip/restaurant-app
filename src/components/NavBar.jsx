import React from 'react';
import { NavLink } from "react-router-dom";

// Importacion de imagenes
// import Logo from "../images/logo-pizza-1.jpg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div>
          <NavLink className="navbar-brand img-fluid" to="/"> Pizza Prime</NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Restaurante</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/nosotros"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/menu"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Menú
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/reservaciones"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Reservaciones
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;