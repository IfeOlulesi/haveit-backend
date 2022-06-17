import mongoose from "mongoose";
const { Schema } = mongoose;

const CartSchema = new Schema({
    customerId: {
        type: String,
        required: [true, 'You must provide a Customer ID'],
        trim: true,
    },
    productId: {
        type: String,
        required: [true, 'You must provide a Product ID'],
        trim: true,
    },
    totalCost: {
        type: Number,
        required: [true, 'You must provide a Price tag'],
    }
})

export default mongoose.model('Cart', CartSchema)