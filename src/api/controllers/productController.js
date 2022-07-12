import productModel from '../models/productModel.js'
import asyncWrapper from "../middleware/asyncwrapper.js";
import { customError } from '../helpers/custom-error.js';


export default {
    get: asyncWrapper( async (req, res) => {
		  let { sort, field } = req.query;
		  
        let result = productModel.find(req.queryObject)
        
        // Sort
        if (sort) {
        	let sortList = sort.split(",").join(" ")
        	result = result.sort(sortList)
        }else {
        	result = result.sort("name")
        }
        
        // Fields
        if (field) {
        	let fieldList = field.split(",").join(" ")
        	result = result.select(fieldList)
        }
        
        // Page
        let page = Number(req.query.page) || 1
        let limit = Number(req.query.limit) || 10
        let skip = (page - 1) * limit
        result = result.skip(skip).limit(limit)
        
        let products = await result
        res.status(200).json({ nbHit: products.length, data: products })

    }),

    getbyId: asyncWrapper( async (req, res, next) => {
    
        let id = req.params.id;
        let product = await productModel.findById(id)

        if (!product) return next(customError("Product not Found", 404));

        res.status(200).json({ data: product })

    }),

    post: asyncWrapper( async (req, res, next) => {
    
		let reqBody = req.body
        
      let product = await productModel.create(reqBody)
      product.save()

      res.status(200).json({ message: "Product Added", data: product })

    }),

    update: asyncWrapper( async (req, res, next) => {
    
    	let { id: productId } = req.params
    	let reqBody = req.body
    	
      let product = await productModel.findOneAndUpdate({ _id: productId }, reqBody, {
        	new: true,
        	runValidators: true
        })
        
        if (!product) return next(customError("Product not Found", 404));
        
        res.status(200).json({ message: "Product Updated", data: product })
        
    }),

    delete: asyncWrapper( async (req, res, next) => {
	    let { id: productId } = req.params
	    
	    let product = await productModel.findById(productId)
       
       if (!product) return next(customError("Product not Found", 404));
       
       let name = product.name

      console.log(`${name} Deleted`)
      product.delete()
      res.status(200).json({message: `${name} Deleted`})
    })
}
