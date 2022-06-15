import express from 'express';

const Havit = express();
const PORT = 3000;


Havit.get('/api/v1/', (_,res) => {
    res.send("Hello Welcome to Havit")
})

Havit.listen(PORT, () => console.log(`Havit is listing at Port: ${PORT}`))