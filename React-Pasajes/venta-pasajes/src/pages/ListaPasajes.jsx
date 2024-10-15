import { useEffect, useState } from 'react';
import { getPasajes } from '../api/pasajes'; // Asegúrate de tener esta función en tu API
import { Link } from 'react-router-dom';

function ListaPasajes() {
    const [pasajes, setPasajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPasajes = async () => {
            try {
                const res = await getPasajes(); // Llamada a la API para obtener los pasajes
                setPasajes(res.data); // Asignar los pasajes al estado
            } catch (error) {
                setError('Error al cargar los pasajes');
            } finally {
                setLoading(false);
            }
        };

        fetchPasajes();
    }, []);

    if (loading) return <p>Cargando pasajes...</p>;
    if (error) return <p>{error}</p>;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {pasajes.map((pasaje) => (
              <div key={pasaje._id} className="bg-gray-800 text-white rounded-lg p-4 shadow-md">
                  <img 
                      src={`http://localhost:3000/${pasaje.imagen}`} // Asegúrate de que esta URL sea correcta
                      alt={`${pasaje.origen} a ${pasaje.destino}`} 
                      className="w-full h-32 object-cover rounded-md mb-4" 
                  />
                  <h2 className="text-lg font-bold">{pasaje.origen} - {pasaje.destino}</h2>
                  <p>Salida: {new Date(pasaje.fechaSalida).toLocaleString()}</p>
                  <p>Llegada: {new Date(pasaje.fechaLlegada).toLocaleString()}</p>
                  <p>Precio: ${pasaje.precio}</p>
                  <Link to={`/pasajes/${pasaje._id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md">Ver Detalles</Link>
              </div>
          ))}
      </div>
  );
}

export default ListaPasajes;
