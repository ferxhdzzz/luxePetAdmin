import{Schema, model} from "mongoose";

const employeeSchema = new Schema ({
    name:{
type: String,
require: true
    },

    lastName: {
        type: String,
        require: true,
       
    },

    address: {
        type: String,
        require: true,
        
       
    },

    password: {
        type: String,
        require: true,
        min: 8,
       
    },

    typeEmployee: {
        type: String,
        require: true,
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Employees", employeeSchema)

