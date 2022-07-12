import { CustomAPIError } from '../helpers/custom-error.js'

export default function (err, req, res, next) {

	if (err instanceof CustomAPIError) return res.status(err.statusCode).json({ message: err.message})

	console.log({message: err.message})
	return res.status(500).json({ message: err.message })
	
}
