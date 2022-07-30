import React from 'react';
import Footer from '../components/Footer';

// Importacion de imagenes
import Logo from '../images/logo-pizza-1.jpg';

const NuestroMenu = () => {
  return (
    <>
      <header className="mt-5">
        <h1>Próximamente</h1>
      </header>
      <main>
        <img src={Logo} className="img-fluid rounded mx-auto d-block" alt="logo-pizza" />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default NuestroMenu;