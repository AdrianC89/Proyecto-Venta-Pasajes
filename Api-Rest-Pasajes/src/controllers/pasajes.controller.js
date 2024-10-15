import Pasaje from '../models/pasaje.models.js';
import User from '../models/user.model.js';


// Comprar boletos
export const comprarBoletos = async (req, res) => {
  try {
    const pasajeId = req.params.id;
    const cantidadBoletos = req.body.cantidadBoletos;

    // Buscar el pasaje
    const pasaje = await Pasaje.findById(pasajeId);
    if (!pasaje) {
      return res.status(404).json({ message: 'Pasaje no encontrado' });
    }

    // Verificar si hay suficientes asientos disponibles
    if (pasaje.asientosDisponibles < cantidadBoletos) {
      return res.status(400).json({ message: 'No hay suficientes asientos disponibles' });
    }

    // Restar los boletos comprados
    pasaje.asientosDisponibles -= cantidadBoletos;

    // Agregar al comprador al arreglo de compradores del pasaje
    const user = await User.findById(req.user.id);  // `req.user.id` es del token JWT
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si el usuario ya es comprador
    if (!pasaje.compradores.includes(user._id)) {
      pasaje.compradores.push(user._id);
    }

    // Guardar cambios en el pasaje
    await pasaje.save();

    // Actualizar los boletos comprados del usuario
    user.boletosComprados.push({ pasaje: pasajeId, cantidad: cantidadBoletos });
    await user.save();  // Guardar los cambios en el usuario

    return res.status(200).json({
      message: 'Boletos comprados con éxito',
      pasaje,
      boletosRestantes: pasaje.asientosDisponibles
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al comprar boletos', error: error.message });
  }
};

// Obtener todos los pasajes
export const getPasajes = async (req, res) => {
  const { fechaSalida, destino } = req.query;
  const filter = {};

  if (fechaSalida) filter.fechaSalida = { $gte: new Date(fechaSalida) };
  if (destino) filter.destino = new RegExp(destino, 'i');

  try {
    const pasajes = await Pasaje.find(filter); 
    res.json(pasajes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un pasaje por ID
export const getPasajeById = async (req, res) => {
  const { id } = req.params;

  try {
    const pasaje = await Pasaje.findById(id).populate('compradores', 'nombre email');  // Popula el campo compradores
    if (!pasaje) return res.status(404).json({ message: "Pasaje no encontrado" });

    res.json(pasaje);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un pasaje
export const createPasaje = async (req, res) => {
  const { origen, destino, fechaSalida, fechaLlegada, precio, asientosDisponibles } = req.body;
  
  // Cambia esta línea para que solo almacene el nombre del archivo
  const imagen = req.file.filename; // Obtener solo el nombre del archivo, sin la ruta completa

  try {
    const nuevoPasaje = new Pasaje({
      origen,
      destino,
      fechaSalida,
      fechaLlegada,
      precio,
      asientosDisponibles,
      // Guarda la ruta de la imagen en el formato correcto
      imagen: `uploads/${imagen}` // Asegúrate de usar barras normales
    });

    const savedPasaje = await nuevoPasaje.save();
    res.status(201).json(savedPasaje);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un pasaje
export const updatePasaje = async (req, res) => {
  const { id } = req.params;
  const { origen, destino, fechaSalida, fechaLlegada, precio, asientosDisponibles, disponible, imagen } = req.body; // Añade el campo imagen

  try {
    const pasajeUpdated = await Pasaje.findByIdAndUpdate(
      id,
      { origen, destino, fechaSalida, fechaLlegada, precio, asientosDisponibles, disponible, imagen }, // Incluye la imagen al actualizar
      { new: true }
    );

    if (!pasajeUpdated) return res.status(404).json({ message: "Pasaje no encontrado" });

    res.json(pasajeUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un pasaje
export const deletePasaje = async (req, res) => {
  const { id } = req.params;

  try {
    const pasajeDeleted = await Pasaje.findByIdAndDelete(id);
    if (!pasajeDeleted) return res.status(404).json({ message: "Pasaje no encontrado" });

    res.json({ message: "Pasaje eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
