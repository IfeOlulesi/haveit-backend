import mongoose from "mongoose";
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'What is the name of the user?'],
        trim: true,
        lowercase: true,
        maxLength: [20, "Name can not exceed 20 characters"]
    },

    phoneNumbers: {
        type: String,
        required: [true, 'Phone number is required for every user'],
        trim: true,
        maxLength: [13, "Phone number can not exceed 13 characters"]
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    cartId: {
        type: String,
        trim: true,
        unique: true,
    },

    homeAddress: {
        type: String,
        trim: true,
        required: [true, 'Home address is required'],
    },

    profilePicture: String,
    
})

export default mongoose.model('Customer', CustomerSchema)