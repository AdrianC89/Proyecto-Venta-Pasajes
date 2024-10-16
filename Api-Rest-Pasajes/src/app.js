import express from 'express';
import morgan from 'morgan';
import cookieParse from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.routes.js';
import pasajeRoutes from './routes/pasaje.routes.js'

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParse());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api',authRoutes);
app.use('/api', pasajeRoutes);

export default app;