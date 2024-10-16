import React from 'react';

// Importamos las imágenes de los logos (asegúrate de tener las imágenes en la carpeta correcta)
import logoNaranja from '../assets/logo-naranja.png';
import logoBancoNacion from '../assets/logo-banco-nacion.png';
import logoMercadoLibre from '../assets/logo-mercado-pago.png';
import logoPersonalPay from '../assets/logo-personal-pay.png';

const PromocionCuotas = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">¡Cuotas SIN INTERÉS!</h2>
      <p className="text-lg text-gray-600 my-4">Sacá tu pasaje en 3 o 6 cuotas con</p>
      <div className="flex justify-center items-center flex-wrap max-w-full">
        <img src={logoNaranja} alt="Naranja" className="h-12 mx-2" />
        <img src={logoBancoNacion} alt="Banco Nación" className="h-12 mx-2" />
        <img src={logoMercadoLibre} alt="Mercado Libre" className="h-12 mx-2" />
        <img src={logoPersonalPay} alt="Personal Pay" className="h-12 mx-2" />
      </div>
    </div>
  );
};

export default PromocionCuotas;
