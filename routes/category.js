import { Router } from "express";
import { getAllCategory } from "../controllers/category.js";

const category = Router();

category.route('/')
    .get((req, res) => {
        let data = getAllCategory()
        res.json(data)
    })
    .post((req, res) => {
        res.send("This route is still in development 😎👨‍💻")
    })

category.route('/:id')
    .get((req, res) => {
        res.send("This route is still in development 😎👨‍💻")
    })
    .patch((req, res) => {
        res.send("This route is still in development 😎👨‍💻")
    })
    .delete((req, res) => { 
        res.send("This route is still in development 😎👨‍💻")
    })


export default category;

    