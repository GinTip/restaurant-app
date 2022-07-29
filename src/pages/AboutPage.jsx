import React from 'react';
import Footer from '../components/Footer';

// Importacion de imagenes
import Chef from '../images/chef-pizza-1.jpg';

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>Sobre nosotros</h1>
      </header>
      <main>
        <article>
            <div className="d-flex justify-content-center align-items-center p-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={Chef} className="d-block mx-lg-auto img-fluid" alt="Chef" width={700} height={500} loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1>Pizza Prime</h1>
                <h4 className="texto">
                  Somos la cadena de restaurantes prime, exitosa e innovadora de México y para alcanzar el estándar de servicio necesario para lograrlo, mantenemos una estricta política de eficiencia, trato ético y honesto hacia nuestros clientes, proveedores, colaboradores, asociados y a la comunidad en general.
                </h4>
              </div>
            </div>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AboutPage;