import { z } from 'zod';

export const createPasajeSchema = z.object({
    origen: z.string({
        required_error:'Es necesario agregar un punto de salida'
    }),
      destino:  z.string({
        required_error:'Es necesario agregar un punto de destino'
    }),
      precio:  z.number({
        required_error:'Se debe ingresar un numero mayor a 0'
    }),
      asientosDisponibles: z.number({
        required_error:'Se debe ingresar un numero mayor a 0'
    })
})