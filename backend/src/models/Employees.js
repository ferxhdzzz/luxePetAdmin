import { Schema, model } from "mongoose";

const employeeSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    
    typeEmployee: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model ("Employees", employeeSchema)

