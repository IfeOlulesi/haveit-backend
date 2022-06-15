import express from 'express';

const Haveit = express();
const PORT = 3000;


Haveit.get('/api/v1/', (_,res) => {
    res.send("Hello Welcome to Haveit")
})

Haveit.listen(PORT, () => console.log(`Haveit is listing at Port: ${PORT}`))