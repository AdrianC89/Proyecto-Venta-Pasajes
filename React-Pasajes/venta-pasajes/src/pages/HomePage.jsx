import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PromocionCuotas from '../components/PromocionCuotas';
import AboutTandilBus from '../components/AboutTandilBus';



const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">


      {/* Contenido Principal */}
      <main className="flex-grow">
      
        <div className="mb-10">
        <AboutTandilBus />
        </div>

        <div className="mb-10">
        <PromocionCuotas />
        </div>
        
      </main>
      

    </div>
  );
};
  

  export default HomePage;