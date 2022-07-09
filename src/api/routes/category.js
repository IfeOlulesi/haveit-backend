import express from 'express'
import control from "../controllers/categoryController.js"
const category = express.Router()

/** 
 * Get all Category 
 * Get Category by Id
 * 
 * Post (add) Category
 * 
 * Update Category
 * 
 * Delete Category
 * */ 

category.get('/', control.get)

category.post('/', control.post)

category.patch('/:id', control.update)

category.delete('/:id', control.delete)


export default category