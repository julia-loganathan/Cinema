import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/Moviespage';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/movies" element={<MoviesPage></MoviesPage>} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
