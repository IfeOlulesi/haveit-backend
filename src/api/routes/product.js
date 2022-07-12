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

product.get('/', Query, control.get)

product.get('/:id', control.getbyId)

product.post('/', control.post)

product.put('/:id', control.update)

product.delete('/', control.delete)

function Query(req, res, next) {

    if (req.query.categoryId) {
        control.getbyCategoryId(req, res)
    } else {
        next()
    }

}

export default product
