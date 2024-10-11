import React from 'react';
import './PromocionCuotas.css'; // Importamos los estilos

// Importamos las imágenes de los logos (asegúrate de tener las imágenes en la carpeta correcta)
import logoNaranja from '../assets/logo-naranja.png';
import logoBancoNacion from '../assets/logo-banco-nacion.png';
import logoMercadoLibre from '../assets/logo-mercado-pago.png';
import logoPersonalPay from '../assets/logo-personal-pay.png';


const PromocionCuotas = () => {
  return (
    <div className="promocion-container">
      <h2>¡Cuotas SIN INTERÉS!</h2>
      <p>Sacá tu pasaje en 3 o 6 cuotas con</p>
      <div className="logos">
        <img src={logoNaranja} alt="Naranja" />
        <img src={logoBancoNacion} alt="Banco Nación" />
        <img src={logoMercadoLibre} alt="Mercado Libre" />
        <img src={logoPersonalPay} alt="Personal Pay" />
      </div>
    </div>
  );
};

export default PromocionCuotas;
