import express from 'express';
import control from '../controllers/productController.js'

const product = new express.Router()

/**
 * Get all products
 * Get product by ID
 * Get products by categoryId
 * 
 * Post product
 * 
 * Update Product
 * 
 * Delete Product
 */

product.get('/', control.get)

product.get('/:id', control.getbyId)

product.get('/:', control.getbyCategoryId)

product.post('/', control.post)

product.put('/:id', control.update)

product.delete('/', control.delete)

export default product
