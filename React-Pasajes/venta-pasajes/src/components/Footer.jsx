import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 flex flex-wrap justify-center">
      {/* Sección Empresa */}
      <div className="w-full sm:w-1/2 md:w-1/4 mb-6 text-center">
        <h4 className="text-lg text-gray-400 mb-4">Empresa</h4>
        <ul className="space-y-2">
          <li><a href="#!" className="text-gray-400 hover:text-white transition">¿Qué es nuestra empresa?</a></li>
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Centros de atención</a></li>
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Condiciones generales</a></li>
        </ul>
      </div>

      {/* Sección Viajes */}
      <div className="w-full sm:w-1/2 md:w-1/4 mb-6 text-center">
        <h4 className="text-lg text-gray-400 mb-4">Viajes</h4>
        <ul className="space-y-2">
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Empresas</a></li>
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Destinos</a></li>
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Terminales de Micro</a></li>
        </ul>
      </div>

      {/* Sección Ayuda */}
      <div className="w-full sm:w-1/2 md:w-1/4 mb-6 text-center">
        <h4 className="text-lg text-gray-400 mb-4">Ayuda</h4>
        <ul className="space-y-2">
          <li><a href="#!" className="text-gray-400 hover:text-white transition">¿Cómo comprar?</a></li>
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Preguntas Frecuentes</a></li>
        </ul>
      </div>

      {/* Sección Contacto */}
      <div className="w-full sm:w-1/2 md:w-1/4 mb-6 text-center">
        <h4 className="text-lg text-gray-400 mb-4">Contacto</h4>
        <ul className="space-y-2">
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Medios</a></li>
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Empleos</a></li>
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Empresas de Transporte</a></li>
          <li><a href="#!" className="text-gray-400 hover:text-white transition">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;