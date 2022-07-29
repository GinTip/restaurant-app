import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// Importacion de componentes
import NavBar from '../components/NavBar';

// Importacion de "pages"
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import NuestroMenu from '../pages/NuestroMenu';
import Reservaciones from '../pages/Reservaciones';

const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} /> 
          <Route path="/menu" element={<NuestroMenu />} />
          <Route path="/reservaciones" element={<Reservaciones />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;