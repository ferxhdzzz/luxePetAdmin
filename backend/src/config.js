import dotenv from "dotenv" // importar la libreria que acabamos de instalar

dotenv.config //ejecutamos la libreria, para acceder al punto env

export const config ={

    db:{
        URI: process.env.DB_URI || "mongodb+srv://ferhdzzz:Fermi1998@clusterferh.q0jrn.mongodb.net/luxepet2?retryWrites=true&w=majority&appName=ClusterFerH"
    },
    server:{
        port: process.env.PORT || 4000,
    },

}