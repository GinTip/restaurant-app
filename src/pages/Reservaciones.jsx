import React, { useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";

// Importacion de componetes
import Footer from '../components/Footer';
import ModalReserva from "../components/ModalReserva";

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
    <header>
      <h1>Reservaciones</h1>
    </header>
      <main>
        <article>
          <form>
            <div className="containermb-3 mt-5">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre(s) Apellidos"
                autoComplete="off"
                className="form-control"
                value={form.nombre}
                onChange={(e) => {
                  setForm({ ...form, nombre: e.target.value});
                }}
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="textarea"
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
        </article>
      </main>
      <section>
        <article>
          <button
            type="submit"
            className="btn btn-success"
            onClick={crearReserva}
            data-bs-toggle="modal"
            data-bs-target="#reservaExitosa"
          >
            Reservar
          </button>
        </article>
      </section>
      <section>
        <ModalReserva id="reservaExitosa" />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Reservaciones;