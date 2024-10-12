import express from 'express';
import morgan from 'morgan';
import cookieParse from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import pasajeRoutes from './routes/pasaje.routes.js'

const app = express();

//app.use(express.json()); // Middleware para parsear JSON

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParse());

app.use('/api',authRoutes);
app.use('/api', pasajeRoutes);

export default app;