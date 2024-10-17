import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPasajeById, comprarPasaje } from '../api/pasajes'; // Importar la función que obtendrá los datos de un pasaje
import '../index.css'; // Aquí agregaremos estilos personalizados para los asientos

function DetallePasaje() {
    const { id } = useParams(); // Obtenemos el ID del pasaje desde la URL
    const [pasaje, setPasaje] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]); // Para almacenar los asientos seleccionados
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPasaje = async () => {
            try {
                const res = await getPasajeById(id); // Llamada a la API para obtener el pasaje por su ID
                setPasaje(res.data);
            } catch (error) {
                setError('Error al cargar el detalle del pasaje');
            }
        };

        fetchPasaje();
    }, [id]);

    if (!pasaje) return <p>Cargando detalles del pasaje...</p>;
    if (error) return <p>{error}</p>;

    // Manejar la selección de asientos
    const handleSeatSelect = (seatNumber) => {
        if (!selectedSeats.includes(seatNumber)) {
            setSelectedSeats([...selectedSeats, seatNumber]); // Agregar asiento a la lista de seleccionados
        } else {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber)); // Remover asiento si ya estaba seleccionado
        }
    };

    // Manejar la compra de boletos
    const handleComprar = async () => {
        try {
            await comprarPasaje(id, selectedSeats.length); // Llamada a la API para registrar la compra
            alert('Compra realizada con éxito');
            navigate('/pasajes'); // Redirigir al usuario de vuelta a la lista de pasajes
        } catch (error) {
            console.error(error);
            alert('Error al realizar la compra');
        }
    };

    // Crear los asientos (blancos disponibles y rojos ocupados)
    const renderSeats = () => {
        const seats = [];
        const totalSeats = 50; // Capacidad máxima del pasaje
        const occupiedSeats = 50 - pasaje.asientosDisponibles; // Asientos ocupados

        for (let i = 1; i <= totalSeats; i++) {
            let seatClass = 'seat available';

            if (i <= occupiedSeats) {
                seatClass = 'seat occupied';
            } else if (selectedSeats.includes(i)) {
                seatClass = 'seat selected'; // Marcar como seleccionado
            }

            seats.push(
                <div
                    key={i}
                    className={seatClass}
                    onClick={() => seatClass === 'seat available' && handleSeatSelect(i)}
                >
                    {i}
                </div>
            );
        }

        return seats;
    };

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="detalle-pasaje p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-900">Detalles del Pasaje</h1>
                    <img 
                        src={`http://localhost:3000/${pasaje.imagen}`} 
                        alt={`${pasaje.origen} a ${pasaje.destino}`} 
                        className="w-full h-48 object-cover rounded-md mb-4" 
                    />
                    <h2 className="text-xl font-semibold text-gray-700">{pasaje.origen} - {pasaje.destino}</h2>
                    <p className="text-gray-800">Salida: {new Date(pasaje.fechaSalida).toLocaleString()}</p>
                    <p className="text-gray-800">Llegada: {new Date(pasaje.fechaLlegada).toLocaleString()}</p>
                    <p className="text-lg font-bold text-gray-900">Precio: ${pasaje.precio}</p>

                    <h3 className="text-lg font-medium text-gray-700">Selecciona tus asientos:</h3>
                    <div className="seats-container grid grid-cols-4 gap-2">
                        {renderSeats()}
                    </div>

                    <p className="text-gray-600">Asientos seleccionados: {selectedSeats.length}</p>

                    <button 
                        className="btn-comprar w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 ${selectedSeats.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}" 
                        onClick={handleComprar} 
                        disabled={selectedSeats.length === 0}
                    >
                        Comprar Boletos
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetallePasaje;
