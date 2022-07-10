import mongoose from "mongoose";
const { Schema } = mongoose;

const semiProductSchema = new Schema({
    id: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    quantity: {
        type: Number,
        min: 0,
        required: true
    },
})

const CartSchema = new Schema({
    customerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'You must provide a Customer ID'],
        trim: true,
    },

    products: [semiProductSchema],

    totalCost: {
        type: Number,
        required: [true, 'You must provide a Price tag'],
    }
})

export default mongoose.model('Cart', CartSchema)