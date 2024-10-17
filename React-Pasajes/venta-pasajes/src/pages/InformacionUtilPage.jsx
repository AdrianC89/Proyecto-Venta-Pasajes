import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const InformacionUtilPage = () => {
    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="max-w-2xl mx-auto p-6">
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Información Útil</h2>
          <p className="text-gray-700">
            Es responsabilidad de los pasajeros conocer y presentar la documentación obligatoria antes de viajar. El incumplimiento de alguno de los mencionados requisitos es motivo de negación de embarque, sin posibilidad de devolución.
          </p>
          <br />

          <p className="text-gray-700">
          <strong>Viajes a Brasil</strong>
          </p>

          <p className="text-gray-700">
          Con TandilBus podés viajar a Camboriú, Florianópolis, Torres y Porto Alegre, saliendo desde Buenos Aires, Córdoba, Rosario, Santa Fe y Paraná.
          Si sos de Buenos Aires los servicios  a Brasil salen desde Terminal de Retiro , Terminal El Talar de Pacheco y Campana. 
          Para chequear los días y horario de salida podés consultar nuestro buscador de pasajes.
          Si ya sacaste tu pasaje en micro a Brasil con Flecha Bus, te recordamos que tenés que  estar 1 hora antes en la boletería de tu terminal de salida para realizar el chek-in con la documentación correspondiente.
          </p>
          <br />

          <p className="text-gray-700">
          <strong>Viajes a Paraguay</strong>
          </p>

          <p className="text-gray-700">
          El transporte internacional terrestre de pasajeros para micros de larga distancia está habilitado desde y hacia Paraguay. Ya se encuentran habilitados los dos pasos fronterizos : Clorinda -Falcon (puente San Ignacio de Layola) y Posadas-Encarnación (Puente San Roque Gonzalez) 
          *Todos los paraguayos y extranjeros, mayores y menores de edad, deben registrar su ingreso y salida del país. Este trámite es gratuito y se realiza únicamente en los puestos de control migratorio habilitados en los pasos fronterizos terrestres, fluviales y aeroportuarios del Paraguay, ante funcionarios de la Dirección Nacional de Migraciones debidamente acreditados.
          </p>
          <br />

          <p className="text-gray-700">
          <strong>Viajes a Uruguay</strong>
          </p>

          <p className="text-gray-700">
          El transporte internacional terrestre de pasajeros para micros de larga distancia está habilitado desde y hacia Uruguay a través de los corredores Colón / Paysandú, Concordia / Salto y Gualeguaychú / Fray Bentos.
          Para entrar o salir del país por los pasos de frontera, tenés que presentar uno de los siguientes documentos:
        • DNI en formato Físico (último ejemplar emitido por el RENAPER)
        • Pasaporte
          </p>
          <br />

        </div>
      </div>
      </div>
    );
  };
  
  export default InformacionUtilPage;