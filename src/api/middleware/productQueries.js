export default function(req, res, next) {
	let { name, categoryId, arCompatibility, isFavorite, multicolorAvailable, numericFilters } = req.query
	
	let queryObject = new Object()
	
   if (name) queryObject.name = {$regex: name, $options: 'i'};
   
	if (categoryId) queryObject.categoryId = categoryId;
	
	if (arCompatibility) queryObject.arCompatibility = arCompatibility.trim() === 'true' ? true : false;
	
	if (isFavorite) queryObject.isFavorite = isFavorite.trim() === 'true' ? true : false;
	
	if (multicolorAvailable) queryObject.multicolorAvailable = multicolorAvailable.trim() === 'true' ? true : false;
	
	if (numericFilters) {
		const operationMap = {
			'>': '$gt',
			'>=': '$gte',
			'=': '$eq',
			'<': '$lt',
			'<=': '$lte'
		}
		
		const regEx = /\b(<|>|>=|=|<|<=)\b/g
		
		let filters = numericFilters.replace(regEx, (match) => `-${operationMap[match]}-`)
		const options = ["price", "quantityAvailable"]
		
		filters = filters.split(",").forEach((item) => {
			const [field, operator, value] = item.split("-")
			
			if (options.includes(field)) {
				queryObject[field] = { [operator]: Number(value) }
			}
		})
		
	}
	
	
	req.queryObject = queryObject
	next()
}
