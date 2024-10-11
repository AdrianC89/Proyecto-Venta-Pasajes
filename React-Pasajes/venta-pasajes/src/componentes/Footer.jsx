import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Empresa</h4>
        <ul>
          <li><a href="#!">¿Qué es nuestra empresa?</a></li>
          <li><a href="#!">Centros de atención</a></li>
          <li><a href="#!">Condiciones generales</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Viajes</h4>
        <ul>
          <li><a href="#!">Empresas</a></li>
          <li><a href="#!">Destinos</a></li>
          <li><a href="#!">Terminales de Micro</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Ayuda</h4>
        <ul>
          <li><a href="#!">¿Cómo comprar?</a></li>
          <li><a href="#!">Preguntas Frecuentes</a></li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h4>Contacto</h4>
        <ul>
          <li><a href="#!">Medios</a></li>
          <li><a href="#!">Empleos</a></li>
          <li><a href="#!">Empresas de Transporte</a></li>
          <li><a href="#!">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;