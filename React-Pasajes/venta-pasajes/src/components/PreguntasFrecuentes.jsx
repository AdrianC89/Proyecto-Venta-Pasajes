import React from 'react';
import logoPreguntas from '../assets/preguntas.png';

const PreguntasFrecuentes = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 p-4">
      <img
        src={logoPreguntas}
        alt="Icono Preguntas Frecuentes"
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-lg font-bold text-blue-700">PREGUNTAS FRECUENTES</h3>
      <p className="text-gray-600">Estamos para ayudarte</p>
    </div>
  );
};

export default PreguntasFrecuentes;
