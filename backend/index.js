import app from './app.js';
import { connectDB } from './src/database.js';
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 4000;

async function main() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
}

main();
