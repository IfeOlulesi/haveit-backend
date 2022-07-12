import categoryModel from "../models/categoryModel.js";
import asyncWrapper from "../middleware/asyncwrapper.js";

export default {
    get: asyncWrapper( async (_, res) => {
    	
    	let categories = await categoryModel.find()
      res.status(200).json(categories)
         
    }),

    post: asyncWrapper( async (req, res, next) => {

			let category = await categoryModel.exists({ name: req.body.name})
            
         if (category) {
         	let error = new Error(`${req.body.name} already exist`)
         	error.status = 500
         	next(error)
         }                

         category = await categoryModel.create(req.body)
         category.save()

         res.status(200).json({ message: "Category Added", data: category })

    }),

    update: asyncWrapper( async (req, res) => {

            let category = await categoryModel.findById(req.params.id)

            if (!category) res.status(404).json({ message: "Category not Found" });

            category.name = req.body.name
            category.save()
            
            res.status(200).json({ message: "Category Updated", data: category})

    }),

    delete: asyncWrapper( async (req, res) => {
            
            let category = await categoryModel.findById(req.params.id)
            
            if (!category) {
                res.status(404).json({message: "Category not Found"})
            }
            
            let name = category.name

            console.log(`${name} Deleted`)
            category.delete()
            res.status(200).json({message: `${name} Deleted`})

    })
}
