import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Incluimos el Header */}
      <Header />
      
      {/* Contenido Principal */}
      <main className="flex-grow">
        <h1>Bienvenido a la Página Principal</h1>
      </main>
      
      {/* Incluimos el Footer */}
      <Footer />
    </div>
  );
};
  

  export default HomePage;