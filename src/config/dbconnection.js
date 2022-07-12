import mongoose from 'mongoose'

// const local = "mongodb://localhost/Haveit"

export function connectDB(URI) {
    return mongoose.connect(URI)
    	.then(() => console.log("connected to DB"))
     	.catch((err) => console.log(err))
}
