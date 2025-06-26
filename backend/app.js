import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './src/routes/auth.js';

const app = express();

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173', // URL del frontend
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);

export default app;
