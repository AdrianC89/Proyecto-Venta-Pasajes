import React, { useState } from 'react';
import './formulario.css';
import Botones from './Botones';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    ticketType: 'one-way',
    passengers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar la compra de pasajes
    console.log(formData);
  };

  return (
  
    <div className="formulario-contenedor">
        <form onSubmit={handleSubmit} class ="formulario">
        <h2>BUSCÁ TUS PASAJES </h2>
        <label>
            Origen:
            <input type="text" name="origin" value={formData.origin} onChange={handleChange} required/>
        </label>

        <label>
            Destino:
            <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
        </label>

        <label>
            Fecha de salida:
            <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} required/>
        </label>

        {formData.ticketType === 'round-trip' && (
            <label>
            Fecha de regreso:
            <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange}/>
            </label>
        )}

        <label>
            Tipo de pasaje:
            <select name="ticketType" value={formData.ticketType} onChange={handleChange}>
                <option value="one-way">Solo ida</option>
                <option value="round-trip">Ida y vuelta</option>
            </select>
        </label>

        <label>
            Pasajeros:
            <input type="number" name="passengers" value={formData.passengers} min="1" onChange={handleChange} />
        </label>

        <Botones type="submit" texto= "buscar pasajes"/>
        </form>
    </div>
  );
};

export default TicketForm;
