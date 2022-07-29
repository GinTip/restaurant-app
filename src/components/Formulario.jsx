import React, { useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";

// Importacion de componetes
import ModalFormulario from "../components/ModalFormulario";

// Importacion de imagenes
import Logo from "../images/logo-pizza-1.jpg";

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  comentario: "",
};

const Reservaciones = () => {
  const [form, setForm] = useState(initialForm);

  const crearReserva = () => {
    const reserva = collection(db, "reservaciones");
    addDoc(reserva, form);
  };

  return (
    <>
      <div className="container mt-5" style={{ maxWidth: 1000 }}>
        <div className="row g-2 align-items-center">
          <div className="col-md-4">
            <img src={Logo} className="img-fluid rounded" alt="logo-pizza" height={500} width={500}/>
          </div>
          <div className="col-md-7 m-3">
            <div className="p-2">
              <h5 className="card-title">Reserva con nostros</h5>
              <form>
                <div className="mb-3 mt-2">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre(s) Apellidos"
                    autoComplete="off"
                    className="form-control"
                    value={form.nombre}
                    onChange={(e) => {
                      setForm({ ...form, nombre: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="textarea"
                    rows="3"
                    placeholder="ejemplo@email.com"
                    autoComplete="off"
                    className="form-control"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    id="telefono"
                    type="number"
                    placeholder="Ej. 2222140135"
                    autoComplete="off"
                    className="form-control"
                    value={form.telefono}
                    onChange={(e) => {
                      setForm({ ...form, telefono: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="comentario">Comentarios</label>
                  <input
                    id="comentario"
                    type="text"
                    placeholder="Ej. Alergia a algún alimento"
                    autoComplete="off"
                    className="form-control"
                    value={form.comentario}
                    onChange={(e) => {
                      setForm({ ...form, comentario: e.target.value });
                    }}
                    required
                  />
                </div>
              </form>
              <article>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={crearReserva}
                  data-bs-toggle="modal"
                  data-bs-target="#reserva"
                >
                  Reservar
                </button>
              </article>
              <section>
                <ModalFormulario id="reserva" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservaciones;