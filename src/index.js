import express from 'express';
import { connectDB } from './config/dbconnection.js';
// require("dotenv").config()

const Haveit = express();
const PORT = process.env.PORT || 3100;

const Start = async () => {
    try {
        await connectDB().then(() => console.log("connected to DB"))
        Haveit.listen(PORT, () => console.log(`Haveit is listing at Port: ${PORT}`))
    } catch (error) {
        console.log(error)        
    }
}

Start()