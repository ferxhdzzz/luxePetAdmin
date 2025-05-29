import dotenv from "dotenv" // importar la libreria que acabamos de instalar

dotenv.config() //ejecutamos la libreria, para acceder al punto env

export const config = {
    db: {
        URI: process.env.DB_URI || "mongodb+srv://ferhdzzz:Fermi1998@clusterferh.q0jrn.mongodb.net/luxepet2?retryWrites=true&w=majority&appName=ClusterFerH"
    },
    server: {
        port: process.env.PORT || 4000,
    },
    cloudinary: {
        cloudinary_name: process.env.CLOUDINARY_NAME,
        cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
        cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
    },

    admin:{
        ADMIN_USERNAME :process.env.ADMIN_USERNAME || "fernanda@gmail.com",
        ADMIN_PASSWORD :process.env.ADMIN_PASSWORD || "lesserafimnaespa",
            },
             jwt:{
secret :process.env.JWT_SECRET || "lesserafimnaespa",
expiresIn :process.env.JWT_EXPIRES || "30d",
    },
            email:{
                useremail:process.env.USER_EMAIL || "lovercotes@gmail.com" ,
                userpassword:process.env.PASSWORD_EMAIL || "cbig yrkr bwql zsbx"
            }
}