import categoryModel from "../models/categoryModel.js"

export default {
    async get(_, res) {
        try {

            let categories = await categoryModel.find()
            res.status(200).json(categories)

        } catch (error) {

            console.log({message: error.message })
            res.status(500).json({message: error.message })

        }
    },

    async post(req, res) {
        try {
            let category = await categoryModel.create(req.body)
            category.save()

            res.status(200).json({ message: "Category Added", data: category })

        } catch (error) {
            console.log({message: error.message })
            res.status(500).json({message: error.message })
        }

    },

    async update(req, res) {
        try {

            let category = await categoryModel.findById(req.params.id)

            if (!category) res.status(404).json({ message: "Category not Found" });

            category.name = req.body.name
            category.save()
            
            res.status(200).json({ message: "Category Updated", data: category})

        } catch (error) {

            console.log({message: error.message })
            res.status(500).json({message: error.message })
        }
    },

    async delete(req, res) {
        try {
            
            let category = await categoryModel.findById(req.params.id)
            
            if (!category) {
                res.status(404).json({message: "Category not Found"})
            }
            let name = category.name

            console.log(`${name} Deleted`)
            category.delete()
            res.status(200).json({message: `${name} Deleted`})


        } catch (error) {

            console.log({message: error.message })
            res.status(500).json({message: error.message })
        }
    }
}