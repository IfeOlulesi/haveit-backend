import express from 'express';
import category from './api/routes/category.js';
import { connectDB } from './config/dbconnection.js';

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

Haveit.use(express.json());
Haveit.use(express.urlencoded({ extended: true }));


Haveit.use('/category', category)

Start()