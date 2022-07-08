import mongoose from 'mongoose'

export function connectDB() {
    return mongoose.connect("mongodb://localhost/Havit")
}
