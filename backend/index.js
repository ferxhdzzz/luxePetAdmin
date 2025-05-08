import app from "./app.js";
import "./database.js";
import dotenv from "dotenv";

dotenv.config()

import { config } from "./src/config.js";

async function main() {
    //const port = 4000;
    app.listen(config.server.port);
    console.log("server on port" +    config.server.port)
}

main();
