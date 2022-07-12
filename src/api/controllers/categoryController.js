import categoryModel from "../models/categoryModel.js";
import asyncWrapper from "../middleware/asyncwrapper.js";
import { customError } from '../helpers/custom-error.js';

export default {
    get: asyncWrapper( async (_, res) => {
    	
    	let categories = await categoryModel.find()
      res.status(200).json({ data: categories, nbHit: categories.length })
         
    }),

    post: asyncWrapper( async (req, res, next) => {

			let category = await categoryModel.exists({ name: req.body.name})
            
      if (category) return next(customError(`${req.body.name} already exist`, 500))      

      category = await categoryModel.create(req.body)
      category.save()

      res.status(200).json({ message: "Category Added", data: category })

    }),

    update: asyncWrapper( async (req, res, next) => {

      let category = await categoryModel.findById(req.params.id)

      if (!category) return next(customError("Category not Found", 404)) ;

      category.name = req.body.name
      category.save()
            
      res.status(200).json({ message: "Category Updated", data: category})

    }),

    delete: asyncWrapper( async (req, res, next) => {
            
      let category = await categoryModel.findById(req.params.id)
            
      if (!category) return next(customError("Category not Found", 404));
      
      let name = category.name

      console.log(`${name} Deleted`)
      category.delete()
      res.status(200).json({message: `${name} Deleted`})

    })
}
