import React from 'react';
import logoInformacion from '../assets/informacion.png';
import { Link } from 'react-router-dom';

const InformacionUtil = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 p-4">
      <img
        src= {logoInformacion}
        alt="Icono Información Útil"
        className="w-16 h-16 mb-4"
      />
      
      <Link to="/informacionutil">
        <h3 className="text-lg font-bold text-blue-700 hover:text-blue-500 cursor-pointer">
          INFORMACIÓN ÚTIL
        </h3>
      </Link>

      <p className="text-gray-600">Infórmate antes de viajar</p>
    </div>
  );
};

export default InformacionUtil;
