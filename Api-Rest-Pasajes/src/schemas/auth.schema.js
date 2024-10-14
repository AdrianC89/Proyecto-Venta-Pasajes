import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'El Usuario es requerido'
    }),
    email: z.string({
        required_error: 'Se requiere un email'
    }).email({
        required_error: 'Email inválido'
    }),
    password: z.string({
        required_error: 'Se requiere contraseña'
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres'
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Se requiere un email'
    }).email({
        required_error: 'Email inválido'
    }),
    password: z.string({
        required_error: 'Se requiere contraseña'
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres'
    })
})