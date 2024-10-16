import React, { useState } from 'react';

const Perfil = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    telefono: '',
    ciudad: '',
    fechaNacimiento: '',
    recibirNotificaciones: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos ingresados:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>

        <div>
          <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>

        <div>
          <label htmlFor="tipoDocumento" className="block text-sm font-medium text-gray-700">
            Tipo de documento
          </label>
          <select
            name="tipoDocumento"
            id="tipoDocumento"
            value={formData.tipoDocumento}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          >
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Cédula">Cédula</option>
          </select>
        </div>

        <div>
          <label htmlFor="numeroDocumento" className="block text-sm font-medium text-gray-700">
            N° de documento
          </label>
          <input
            type="text"
            name="numeroDocumento"
            id="numeroDocumento"
            value={formData.numeroDocumento}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>

        <div>
          <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">
            Ciudad de Residencia
          </label>
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>

        <div>
          <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            name="fechaNacimiento"
            id="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>

        <div className="col-span-2 flex items-center">
          <input
            type="checkbox"
            name="recibirNotificaciones"
            id="recibirNotificaciones"
            checked={formData.recibirNotificaciones}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label htmlFor="recibirNotificaciones" className="ml-2 block text-sm text-gray-900">
            Me gustaría recibir noticias de viajes vía email
          </label>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default Perfil;
