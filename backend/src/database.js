import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('>>> DB is connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit process with failure
    }
};
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.DB_URI;

(async () => {
    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.log('Database is connected to:', db.connection.name);
    } catch (error) {
        console.error('Database connection error:', error);
    }
})();
