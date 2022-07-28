import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// Importacion de "pages"
import NavBar from '../components/NavBar';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;