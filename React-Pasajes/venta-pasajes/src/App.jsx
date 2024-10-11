import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import TicketForm from './formulario.jsx';
import PromocionCuotas from './componentes/PromocionCuotas';

import './App.css'

const App = () => {

  return (
    <Router>
      <Header />

      <div className='contenedorPadre'>

      <div className='contenedorPrincipal'>
        <Routes>
          <Route path="/" element={<TicketForm/>} />
        </Routes>
      </div>


      <div className='contenedorPrincipal'>
        <Routes>
          <Route path="/" element={<PromocionCuotas/>} />
        </Routes>
      </div>
      

      </div>

      <Footer />
    </Router>
  );
};

export default App;
