import express from 'express';
import {
  createPasaje,
  getPasajes,
  getPasajeById,
  updatePasaje,
  deletePasaje
} from '../controllers/pasaje.controller.js';

const router = express.Router();

router.post('/pasajes', createPasaje);
router.get('/pasajes', getPasajes);
router.get('/pasajes/:id', getPasajeById);
router.put('/pasajes/:id', updatePasaje);
router.delete('/pasajes/:id', deletePasaje);

export default router;
