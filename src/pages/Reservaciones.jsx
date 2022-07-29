import React, { useState } from 'react';
import { db } from "../firebase/firebase";
import { addDoc, collection } from 'firebase/firestore';
import Footer from '../components/Footer';

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  comentario: "",
}

console.log(initialForm);

const Reservaciones = () => {
  const [form, setForm] = useState(initialForm);

  const saveReservation = async () => {
    const reservacion = collection(db, "reservaciones");
    await addDoc(reservacion, form);
  };

  return (
    <>
      <header>

      </header>
      <article>
        <form>
          <div className="mb-3 mt-5">
            <label htmlFor="nombre" className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              autoComplete="off"
              value={form.nombre}
              onChange={(e) => {
                setForm({ ...form, nombre: e.target.value });
              }} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete="off"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }} />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input
              type="number"
              className="form-control"
              id="telefono"
              autoComplete="off"
              value={form.telefono}
              onChange={(e) => {
                setForm({ ...form, telefono: e.target.value });
              }} />
          </div>
          <div className="mb-3">
            <label htmlFor="comentario" className="form-label">Mensaje y comentarios</label>
            <textarea
              type="text"
              className="form-control"
              id="comentario"
              rows="3"
              autoComplete="off"
              value={form.comentario}
              onChange={(e) => {
                setForm({ ...form, comentario: e.target.value });
              }} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={saveReservation}>Reservar</button>
        </form>
      </article>
      <footer className='mt-5'>
        <Footer />
      </footer>
    </>
  )
};

export default Reservaciones;