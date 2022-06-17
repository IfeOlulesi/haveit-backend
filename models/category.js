import mongoose from 'mongoose';
const { Schema } = mongoose

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Category Name is required'],
    }
})

export default mongoose.model('Category', CategorySchema)