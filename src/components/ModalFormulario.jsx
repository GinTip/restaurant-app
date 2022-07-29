import React from 'react';

const ModalFormulario = () => {
  return (
    <>
      <div className="modal fade" id="reserva" tabIndex={-1} aria-labelledby="reserva" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="reserva">Reservación exitosa!</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <h2>Tu reserva se ha realizado con éxito!</h2>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFormulario;