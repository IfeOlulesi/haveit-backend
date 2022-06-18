import { Router } from "express";
import { getAllCategory } from "../controllers/category.js";

const category = Router();

category.route('/')
    .get((req, res) => {
        let data = getAllCategory()
        res.json(data)
    })


export default category;

    