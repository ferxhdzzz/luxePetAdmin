import{Schema, model} from "mongoose";

const supplierSchema = new Schema ({
    name:{
type: String,
require: true
    },

    address: {
        type: String,
        require: true,
        
       
    },

    managerName: {
        type: String,
        require: true,
       
    },

    phone: {
        type: Number,
        require: true,
        
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Suppliers", supplierSchema)