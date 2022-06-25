import express from 'express';
import category from './routes/category.js';

const Haveit = express();
const PORT = process.env.PORT || 3100;


Haveit.get('/api/v1/', (_,res) => {
    res.send("Hello Welcome to Haveit")
})

Haveit.use('/api/v1/category', category)

Haveit.listen(PORT, () => console.log(`Haveit is listing at Port: ${PORT}`))