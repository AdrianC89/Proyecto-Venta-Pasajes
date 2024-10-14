import { Router } from 'express';
import { createPasaje, getPasajes, getPasajeById, updatePasaje, deletePasaje, comprarBoletos } from '../controllers/pasajes.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import {validateSchema} from '../middlewares/validator.middleware.js';
import {createPasajeSchema} from '../schemas/pasaje.schema.js'

const router = Router();

// CRUD básico de pasajes
router.post('/pasajes',authRequired, validateSchema(createPasajeSchema), createPasaje);
router.get('/pasajes', getPasajes);
router.get('/pasajes/:id', getPasajeById);
router.put('/pasajes/:id', updatePasaje);
router.delete('/pasajes/:id', deletePasaje);

// Comprar boletos (autenticado)
router.post('/pasajes/:id/comprar', authRequired, comprarBoletos);

export default router;
