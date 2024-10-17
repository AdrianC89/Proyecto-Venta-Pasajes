import React from 'react';
import logoInformacion from '../assets/informacion.png';

const InformacionUtil = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 p-4">
      <img
        src= {logoInformacion}
        alt="Icono Información Útil"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-lg font-bold text-blue-700">INFORMACIÓN ÚTIL</h3>
      <p className="text-gray-600">Infórmate antes de viajar</p>
    </div>
  );
};

export default InformacionUtil;
