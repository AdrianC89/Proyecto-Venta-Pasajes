import React from 'react';
import './Botones.css';

export default function Botones ({ texto, type = "submit", onClick, color }) {
  const estiloBoton = {
    backgroundColor: color || '#0ec1ee',
  };

  return (
    <button
      className='boton' type={type} onClick={onClick} style={estiloBoton}
    >
      {texto}
    </button>
  );
}