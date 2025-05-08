import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { config } from "./src/config.js";

//configuro la URL+

//const URI = "" ;

//conecto la base
mongoose.connect(config.db.URI);

//comprobar todo
//creo una funcion


const connection = mongoose.connection;

connection.once("open", () => {
    console.log("connected");

});


connection.on("diconnected", () => {
    console.log("disconnected");


});

connection.on("error", (error) => {
    console.log("error"+error);


});
