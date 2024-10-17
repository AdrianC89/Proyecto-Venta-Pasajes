import React from 'react';
import dibujoBus from '../assets/bus.png';

const AboutTandilBus = () => {
  return (
    <div className="bg-blue-500 flex items-center justify-center py-10">
      <div className="max-w-4xl mx-auto text-white px-4 flex items-center">
        <div className="w-1/2">
        <img
         src={dibujoBus} alt="dibujoBus" className="w-full" />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4">¿Por qué TandilBus es tu mejor opción?</h2>
          <p className="text-lg font-semibold mb-2">La mejor manera de comprar pasajes de micro</p>
          <p className="text-md">
            TandilBus es una herramienta de búsqueda de micros: incluimos rutas, horarios y precios
            en nuestras búsquedas en Micro Sur, junto con muchas otras compañías de micros. Podés comparar precios, 
            instalaciones y horarios mediante la búsqueda de una ruta. Si encontrás un viaje adecuado, podés seguir adelante 
            y comprar tu pasaje de Micro Sur en nuestro sitio. Tené en cuenta que los pasajes se agotan, 
            Micro Sur y otros operadores generalmente cobran mucho más por comprar pasajes a última hora 
            o por comprarlos en persona.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTandilBus;
