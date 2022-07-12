import mongoose from 'mongoose';
const { Schema } = mongoose;

const imageSchema = new Schema({
    url: String,
    alt: String
})

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

    displayImage: imageSchema,

    arCompatibility: {
        type: Boolean,
        default: false,
    },

    carouselImages: Array,

    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required'],
    },

    isFavorite: {
        type: Boolean,
        default: false,
    },

    quantityAvailable: {
        type: Number,
        default: 0,
    },

    multicolorAvailable: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.model('Product', ProductSchema)
