import React, { useState } from 'react';

const PreguntasRespuestas = () => {
  // Estado para controlar qué pregunta está abierta
  const [activeIndex, setActiveIndex] = useState(null);

  // Función para alternar la apertura/cierre de una pregunta
  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Cierra la respuesta si ya está abierta
    } else {
      setActiveIndex(index); // Abre la nueva respuesta
    }
  };

  // Preguntas y respuestas
  const faqList = [
    {
      question: '¿Cómo puedo comprar un pasaje?',
      answer: 'Puedes comprar un pasaje de micro a través de nuestra página web. Simplemente selecciona tu destino, elige la fecha y hora de salida, y sigue las instrucciones para completar el pago. También puedes adquirir tus pasajes en nuestras terminales autorizadas.',
    },
    {
      question: '¿Qué documentos necesito para viajar?',
      answer: 'Para viajar, debes presentar un documento de identidad válido (DNI, pasaporte, etc.) y tu pasaje impreso o en formato digital. Asegúrate de que los datos coincidan con los de tu identificación.',
    },
    {
      question: '¿Los menores de edad cuentan con algún tipo de seguro durante el viaje?',
      answer: 'Sí, todos los menores de edad que viajan con nosotros están cubiertos por un seguro especial que les brinda protección durante el trayecto. Este seguro está diseñado para garantizar la seguridad y el bienestar de los niños, ofreciendo asistencia en caso de cualquier eventualidad. Te recomendamos que verifiques los detalles de la cobertura al momento de adquirir el pasaje.',
    },
    {
      question: '¿Existen descuentos para estudiantes o grupos?',
      answer: 'Sí, ofrecemos descuentos especiales para estudiantes y grupos. Los descuentos para estudiantes son del 10% presentando una credencial válida. Para grupos de más de 10 personas, contacta a nuestro servicio de atención al cliente para obtener una tarifa personalizada.',
    },
  ];

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">PREGUNTAS FRECUENTES</h2>
      {faqList.map((faq, index) => (
        <div key={index} className="border-b-2 py-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
            <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
            <span className="text-blue-700 text-2xl">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <p className="text-black mt-4">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default PreguntasRespuestas;
