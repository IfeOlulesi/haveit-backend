import productModel from '../models/productModel.js'
import asyncWrapper from "../middleware/asyncwrapper.js";

export default {
    get: asyncWrapper( async (_, res) => {

        let products = await productModel.find()
        res.status(200).json(products)

    }),

    getbyId: asyncWrapper( async (req, res) => {
    
        let id = req.params.id;
        let product = await productModel.findById(id)

        if (!product) res.status(404).json({ message: "Product not Found" });

        res.status(200).json(product)

    }),

    getbyCategoryId: asyncWrapper( async (req, res) => {
    
        let id = req.query.categoryId;
        let product = await productModel.find({ categoryId: id }).limit(10)
        res.status(200).json(product)

    }),

    post: asyncWrapper( async (req, res, next) => {
    
			let reqBody = req.body
        
      	let product = await productModel.exists({ name: reqBody.name})
           
			if (product) {
         	let error = new Error(`${reqBody.name} already exist`)
         	error.status = 500
         	next(error)               
      	}

         product = await productModel.create(reqBody)
         product.save()

         res.status(200).json({ message: "Product Added", data: category })

    }),

    update(req, res) {
        res.send("Product is live")
    },

    async delete(req, res) {
        res.send("Product is live")
    }
}
