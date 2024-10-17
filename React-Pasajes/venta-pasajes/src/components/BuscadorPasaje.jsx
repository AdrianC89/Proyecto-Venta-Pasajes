import React from 'react';

const BuscadorPasajes = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Buscá tus pasajes en micro</h2>
      
      <form>
        {/* Origen */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="origen">
            Origen*
          </label>
          <input
            type="text"
            id="origen"
            placeholder="Ingrese Ciudad o Terminal"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Destino */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="destino">
            Destino*
          </label>
          <input
            type="text"
            id="destino"
            placeholder="Ingrese Ciudad o Terminal"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Partida y Regreso */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Partida */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="partida">
              Partida*
            </label>
            <input
              type="date"
              id="partida"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Regreso */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="regreso">
              Regreso (opcional)
            </label>
            <input
              type="date"
              id="regreso"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Botón de buscar */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Buscar pasajes
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuscadorPasajes;
