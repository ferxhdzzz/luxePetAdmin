import{Schema, model} from "mongoose";

const customerSchema = new Schema ({
    name:{
type: String,
require: true
    },

    lastName:{
type: String,
require: true
    },

    birthday: {
        type: Date,
        require: true,
        
    },

    userName: {
        type: String,
        require: true,
       
    },

    password: {
        type: String,
        require: true,
        min:7
       
    },

    email: {
        type: String,
        require: true,
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Customers", customerSchema)