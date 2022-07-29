import React, { useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import Footer from '../components/Footer';


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
                placeholder="Nombre"
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
                placeholder="email"
                autoComplete="off"
                className="form-control"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                type="number"
                placeholder="telefono"
                autoComplete="off"
                className="form-control"
                value={form.telefono}
                onChange={(e) => {
                  setForm({ ...form, telefono: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comentario">Comentarios</label>
              <input
                id="comentario"
                type="text"
                placeholder="comentario"
                autoComplete="off"
                className="form-control"
                value={form.comentario}
                onChange={(e) => {
                  setForm({ ...form, comentario: e.target.value });
                }}
              />
            </div>
          </form>
        </article>
      </main>
      <section>
        <article>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={crearReserva}
            >
              Reservar
            </button>
        </article>
      </section>
      <footer className='mt-5'>
        <Footer />
      </footer>
    </>
  );
};

export default Reservaciones;