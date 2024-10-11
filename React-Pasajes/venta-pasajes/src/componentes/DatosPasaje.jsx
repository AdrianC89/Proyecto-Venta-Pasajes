import React from 'react';
import './DatosPasaje.css'; 

const DatosPasaje = ({ origen, destino, transporte, salida, llegada, duracion, precio }) => {
    return (
        <div className="datos-pasaje">
            <h2 className="ruta">{origen} ➜ {destino}</h2>
            <div className="informacion-pasaje">
                <p><strong>Transporte:</strong> {transporte}</p>
                <p><strong>Salida:</strong> {salida}</p>
                <p><strong>Llegada:</strong> {llegada}</p>
                <p><strong>Duración:</strong> {duracion}</p>
                <p><strong>Precio:</strong> ARS {precio}</p>
            </div>
        </div>
    );
};

export default DatosPasaje;
