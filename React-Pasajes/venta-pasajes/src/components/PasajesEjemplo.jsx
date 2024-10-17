import React from 'react';
import marDelPlata from '../assets/marDelPlata.png';
import villaGesell from '../assets/villaGesell.png';
import pinamar from '../assets/pinamar.png';
import buenosAires from '../assets/buenosAires.png';

const PasajesEjemplo = () => {
  const destinos = [
    {
      id: 1,
      ciudad: 'Mar Del Plata',
      img: marDelPlata,
      desde: ['Buenos Aires', 'Liniers', 'Lomas De Zamora'],
    },
    {
      id: 2,
      ciudad: 'Villa Gesell',
      img: villaGesell,
      desde: ['Buenos Aires', 'Liniers', 'La Plata'],
    },
    {
      id: 3,
      ciudad: 'Pinamar',
      img: pinamar,
      desde: ['Buenos Aires', 'Liniers', 'Florencio Varela'],
    },
    {
      id: 4,
      ciudad: 'Buenos Aires',
      img: buenosAires,
      desde: ['Bahía Blanca', 'Mar Del Plata', 'Villa Gesell'],
    },
  ];

  return (
    <div className="flex justify-center items-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinos.map((destino) => (
          <div key={destino.id} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img
              src={destino.img}
              alt={destino.ciudad}
              className="w-full h-40 object-cover"
            />
            <div className="bg-green-500 text-gray-300 text-center py-2">
              <h3 className="text-lg font-semibold">{destino.ciudad}</h3>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold text-gray-700">desde</p>
              {destino.desde.map((lugar, index) => (
                <p key={index} className="text-gray-600">{lugar}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasajesEjemplo;
