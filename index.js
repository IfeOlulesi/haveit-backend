import express from "express";

const Havit = express()
const PORT = 3000;

Havit.get('/', (_, res) => { 
    res.send("Welcome to Havit")
})


Havit.listen(PORT, () => console.log(`Havit is listening on ${PORT}`));