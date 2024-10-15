import multer from 'multer';
import path from 'path';

// Configuración de almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads/'); // La carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    // Usa el nombre original del archivo, pero asegúrate de evitar colisiones
    cb(null, Date.now() + path.extname(file.originalname)); // Agrega un timestamp para evitar colisiones
  }
});

// Inicializa el middleware
const upload = multer({ storage });

export default upload;