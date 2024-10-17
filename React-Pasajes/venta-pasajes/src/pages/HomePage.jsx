import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PromocionCuotas from '../components/PromocionCuotas';
import AboutTandilBus from '../components/AboutTandilBus';
import InformacionUtil from '../components/InformacionUtil';
import PreguntasFrecuentes from '../components/PreguntasFrecuentes';
import PasajesEjemplo from '../components/PasajesEjemplo';
import BuscadorPasajes from '../components/BuscadorPasaje';



const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">


      {/* Contenido Principal */}
      <main className="flex-grow">
        
          <div className="flex justify-between mt-8">
              <div className="w-1/2 pr-4"> {/* Ajustamos un margen a la derecha para el espacio */}
                  <div className="mb-10">
                       <PromocionCuotas />
                   </div>
              </div>

              <div className="w-1/2 pl-4"> {/* Ajustamos un margen a la izquierda para el espacio */}
                  <div className="mb-10">
                        <BuscadorPasajes />
                  </div>
              </div>
          </div>

         

        <div className="mb-10">
        <AboutTandilBus />
        </div>

        <div className="mb-10">
        <PasajesEjemplo />
        </div>


        <div className="bg-white p-6 rounded-lg shadow-md"> {/* Cuadrado blanco con padding y sombras */}
            <div className="w-1/2 flex mb-10"> 
                <div className="w-1/2 pr-4"> {/* Componente 1: margen a la derecha */}
                   <InformacionUtil />
                </div>
                <div className="w-1/2 pl-4"> {/* Componente 2: margen a la izquierda */}
                      <PreguntasFrecuentes />
                 </div>
            </div>
          </div>


      </main>
      

    </div>
  );
};
  

  export default HomePage;