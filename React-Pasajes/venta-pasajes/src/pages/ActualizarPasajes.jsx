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
        <div className="detalle-pasaje">
            <h1>Detalles del Pasaje</h1>
            <img 
                src={`http://localhost:3000/${pasaje.imagen}`} 
                alt={`${pasaje.origen} a ${pasaje.destino}`} 
                className="w-full h-64 object-cover rounded-md mb-4" 
            />
            <h2>{pasaje.origen} - {pasaje.destino}</h2>
            <p>Salida: {new Date(pasaje.fechaSalida).toLocaleString()}</p>
            <p>Llegada: {new Date(pasaje.fechaLlegada).toLocaleString()}</p>
            <p>Precio: ${pasaje.precio}</p>

            <h3>Selecciona tus asientos:</h3>
            <div className="seats-container">
                {renderSeats()}
            </div>

            <p>Asientos seleccionados: {selectedSeats.length}</p>

            <button 
                className="btn-comprar" 
                onClick={handleComprar} 
                disabled={selectedSeats.length === 0}
            >
                Comprar Boletos
            </button>
        </div>
    );
}

export default DetallePasaje;
