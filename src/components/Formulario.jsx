import React, { useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { NavLink } from 'react-router-dom';

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
            <img src={Logo} className="img-fluid rounded" alt="logo-pizza" height={500} width={500} />
          </div>
          <div className="col-md-7 m-3">
            <div className="p-2">
              <h3 className="card-title titulos">Reserva con nostros</h3>
              <form>
                <div className="mb-3 texto">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Nombre(s) Apellidos"
                    autoComplete="off"
                    className="form-control texto"
                    value={form.nombre}
                    onChange={(e) => {
                      setForm({ ...form, nombre: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3 texto">
                  <label htmlFor="fecha">Fecha</label>
                  <input
                    id="fecha"
                    type="date"
                    placeholder="mm/dd/aa"
                    autoComplete="off"
                    className="form-control texto"
                    value={form.fecha}
                    onChange={(e) => {
                      setForm({ ...form, fecha: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3 texto">
                  <label htmlFor="Hora">Hora</label>
                  <input
                    id="hora"
                    type="time"
                    placeholder="hh:mm pm/am"
                    autoComplete="off"
                    className="form-control texto"
                    value={form.hora}
                    onChange={(e) => {
                      setForm({ ...form, hora: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3 texto">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="textarea"
                    placeholder="ejemplo@email.com"
                    autoComplete="off"
                    className="form-control texto"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3 texto">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    id="telefono"
                    type="number"
                    placeholder="Ej. 2222140135"
                    autoComplete="off"
                    className="form-control texto"
                    value={form.telefono}
                    onChange={(e) => {
                      setForm({ ...form, telefono: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3 texto">
                  <label htmlFor="comentario">Comentarios</label>
                  <input
                    id="comentario"
                    type="text"
                    placeholder="Ej. Alergia a algún alimento"
                    autoComplete="off"
                    className="form-control texto"
                    value={form.comentario}
                    onChange={(e) => {
                      setForm({ ...form, comentario: e.target.value });
                    }}
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
                <button
                  type="submit"
                  className="btn btn-info m-2"
                >
                  <NavLink
                    to="/reservaciones"
                    aria-current="page"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Ver reservaciones
                  </NavLink>
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