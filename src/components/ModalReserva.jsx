import React from 'react';
import { NavLink } from "react-router-dom";

const ModalReserva = () => {
  return (
    <>
      <div className="modal fade" id="reservaExitosa" tabIndex={-1} aria-labelledby="reservaExitosa" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="reservaExitosa">Reservación exitosa!</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <h2>Tu reserva se ha realizado con éxito!</h2>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hacer otra reserva</button>
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal">
                <NavLink
                  to="/"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"}
                >
                  Página principal
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalReserva;