import React, { useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

// Importacion de componetes
import Footer from '../components/Footer';
import ModalReserva from "../components/ModalReserva";

// Importacion de imagenes
import PizzaEat from "../images/pizza-eat-1.jpg";

const initialForm = {
  nombre: "",
  fecha: "",
  hora: "",
  email: "",
  telefono: "",
  comentario: "",
};

const Reservaciones = () => {
  const [form, setForm] = useState(initialForm);
  const [reservas, setReservas] = useState([]);

  const crearReserva = async () => {
    const reserva = collection(db, "reservaciones");
    await addDoc(reserva, form);
    await obtenerReservas();
  };

  const obtenerReservas = async () => {
    const resp = await getDocs(collection(db, "reservaciones"));
    const reservas = resp.docs.map((reserva) => ({
      id: reserva.id,
      ...reserva.data(),
    }));

    setReservas(reservas);
  };

  return (
    <>
      <header className="mt-5">
        <h1>Realiza tu reservación</h1>
      </header>
      <main>
        <section>
          <img src={PizzaEat} className="img-fluid" alt="pizza-eat"/>
        </section>
        <article className="mt-4">
          <h4> Llena los siguientes campos para hacer tu reservación con nosotros.</h4>
        </article>
        <article>
          <form>
            <div className="containermb-3 mt-3">
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
            <div className="containermb-3">
              <label htmlFor="fecha">Fecha</label>
              <input
                id="fecha"
                type="date"
                placeholder="mm/dd/aa"
                autoComplete="off"
                className="form-control"
                value={form.fecha}
                onChange={(e) => {
                  setForm({ ...form, fecha: e.target.value });
                }}
              />
            </div>
            <div className="containermb-3">
              <label htmlFor="Hora">Hora</label>
              <input
                id="hora"
                type="time"
                placeholder="hh:mm pm/am"
                autoComplete="off"
                className="form-control"
                value={form.hora}
                onChange={(e) => {
                  setForm({ ...form, hora: e.target.value });
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
          <button
            type="button"
            className="btn btn-info m-2"
            onClick={obtenerReservas}
          >
            Ver reservaciones
          </button>
        </article>
      </section>
      <section>
        <ModalReserva id="reservaExitosa" />
      </section>
      {/*Tabla*/}
      <section>
        <article>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((obj) => {
                return (
                  <tr key={obj.id}>
                    <td>{obj.nombre}</td>
                    <td>{obj.fecha}</td>
                    <td>{obj.hora}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Reservaciones;