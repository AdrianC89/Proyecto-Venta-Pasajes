import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PromocionCuotas from '../components/PromocionCuotas';
import AboutTandilBus from '../components/AboutTandilBus';



const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">


      {/* Contenido Principal */}
      <main className="flex-grow">
        <h1>Bienvenido a la Página Principal</h1>
        <div className="mb-10">
        <PromocionCuotas />
        </div>
        
        <div className="mb-10">
        <AboutTandilBus />
        </div>
        
      </main>
      

    </div>
  );
};
  

  export default HomePage;