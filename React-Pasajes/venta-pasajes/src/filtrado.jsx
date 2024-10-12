import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import './formulario.css'

const FilterPasajes = () => {
  const [fecha, setFecha] = useState('');
  const [destino, setDestino] = useState('');
  const [pasajes, setPasajes] = useState([]);

  // Función para manejar el cambio del filtro
  const handleFilter = async () => {
    try {
      // Realiza la petición con los filtros seleccionados
      const response = await axios.get('http://localhost:3000/api/pasajes', {
        params: {
          ...(fecha && { fecha }),   // Enviar filtro de fecha si está disponible
          ...(destino && { destino })  // Enviar filtro de destino si está disponible
        }
      });
      
      // Actualiza el estado de pasajes con los resultados filtrados
      setPasajes(response.data);
    } catch (error) {
      console.error('Error fetching pasajes:', error);
    }
  };

  // Llama a la API cuando el filtro cambia
  useEffect(() => {
    handleFilter();
  }, [fecha, destino]); // Actualiza cada vez que los filtros cambien

  return (
    <div className='formulario-contenedor'>
      <h2>Buscar Pasajes</h2>
      <div className='formulario'>
      {/* Filtro por Fecha */}
      <label>Fecha:</label>
      <input 
        type="date" 
        value={fecha} 
        onChange={(e) => setFecha(e.target.value)} 
      />

      {/* Filtro por Destino */}
      <label>Destino:</label>
      <input 
        type="text" 
        placeholder="Destino" 
        value={destino} 
        onChange={(e) => setDestino(e.target.value)} 
      />

      <button onClick={handleFilter}>Filtrar</button>
      </div>

      {/* Mostrar los pasajes filtrados */}
      <div className='formulario'>
        <h3>Resultados:</h3>
        {pasajes.length > 0 ? (
          <ul>
            {pasajes.map((pasaje) => (
              <li key={pasaje._id}>
                <p><strong>Origen:</strong> {pasaje.origen}</p>
                <p><strong>Destino:</strong> {pasaje.destino}</p>
                <p><strong>Fecha de salida:</strong> {new Date(pasaje.fechaSalida).toLocaleDateString()}</p>
                <p><strong>Precio:</strong> ${pasaje.precio}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron pasajes con los filtros seleccionados.</p>
        )}
      </div>
    </div>
  );
};

export default FilterPasajes;
