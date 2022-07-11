import mongoose from 'mongoose'

const dbURI = "mongodb+srv://kodaas:52YASM6hWJR75HD@haveit.kidrqqv.mongodb.net/Haveit?retryWrites=true&w=majority"

const old = "mongodb://localhost/Haveit"

export function connectDB() {
    return mongoose.connect(dbURI)
    	.then(() => console.log("connected to DB"))
     	.catch((err) => console.log(errs))
}
