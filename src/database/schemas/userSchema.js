import { Schema } from "mongoose";
import validator from "validator";

//Defines a Schema to create users model  
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },

    email_verified_at: {
        type: Date, 
        required: [false, 'Timestamp is required']
    },

    phone: String,

    password: {
        type: String,
        required: [true, 'Please enter a password']
    },

    createdAt: {
        type: Date,
        required: [false, 'Timestamp is required']
    },

    updatedAt: {
        type: Date,
        required: [false, 'Timestamp is required']
    }
});

export default userSchema; 
