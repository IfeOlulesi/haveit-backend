import mongoose from 'mongoose'

export function connectDB(URI) {
    return mongoose.connect(URI)
    	.then(() => console.log("connected to DB"))
     	.catch((err) => console.log(err))
}
