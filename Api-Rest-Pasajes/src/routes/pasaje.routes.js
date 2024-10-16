import { Router } from 'express';
import { createPasaje, getPasajes, getPasajeById, updatePasaje, deletePasaje, comprarBoletos } from '../controllers/pasajes.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import upload from '../middlewares/upload.js';


const router = Router();

// CRUD básico de pasajes
router.post('/pasajes', upload.single('imagen'), createPasaje);
router.get('/pasajes', getPasajes);
router.get('/pasajes/:id', getPasajeById);
router.put('/pasajes/:id',authRequired, updatePasaje);
router.delete('/pasajes/:id',authRequired, deletePasaje);

// Comprar boletos (autenticado)
router.post('/pasajes/:id/comprar', authRequired, comprarBoletos);

export default router;
