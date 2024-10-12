import Pasaje from '../models/pasaje.models.js'; 

// Crear un nuevo pasaje
export const createPasaje = async (req, res) => {
  const { origen, destino, fechaSalida, fechaLlegada, precio, asientosDisponibles } = req.body;

  try {
    const newPasaje = new Pasaje({
      origen,
      destino,
      fechaSalida,
      fechaLlegada,
      precio,
      asientosDisponibles
    });

    const pasajeSaved = await newPasaje.save(); // Guardamos el pasaje en la base de datos
    res.status(201).json(pasajeSaved); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los pasajes (o filtrar por fecha/destino)
export const getPasajes = async (req, res) => {
  
    const { fechaSalida, destino } = req.query;
    const filter = {};
    
    if (fechaSalida) {filter.fechaSalida = { $gte: new Date(fecha) }}
    if (destino) {filter.destino = new RegExp(destino, 'i'); }

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
    const pasaje = await Pasaje.findById(id);
    if (!pasaje) return res.status(404).json({ message: "Pasaje no encontrado" });

    res.json(pasaje);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un pasaje
export const updatePasaje = async (req, res) => {
  const { id } = req.params;
  const { origen, destino, fechaSalida, fechaLlegada, precio, asientosDisponibles, disponible } = req.body;

  try {
    const pasajeUpdated = await Pasaje.findByIdAndUpdate(
      id,
      { origen, destino, fechaSalida, fechaLlegada, precio, asientosDisponibles, disponible },
      { new: true } // Retorna el documento actualizado
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
