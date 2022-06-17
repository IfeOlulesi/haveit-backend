import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name of Product is required'],
        trim: true,
        maxLength: [20, 'Product name must not be more than 20 characters'],
    },

    shortDescription: {
        type: String,
        required: [true, 'Product description is needed'],
    },

    mediumDescription: String,

    price: {
        type: Number,
        required: [true, 'Product price is required'],
    },

    displayImage: {
        type: String,
        required: [true, 'Product Image is required'],
    },

    arCompatibility: {
        type: Boolean,
        default: false,
    },

    carouselImages: Array,

    categoryId: String,

    isFavorite: {
        type: Boolean,
        default: false,
    },

    quantityAvailable: {
        type: Integer,
        default: 0,
    },

    multicolorAvailable: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.model('Product', ProductSchema)