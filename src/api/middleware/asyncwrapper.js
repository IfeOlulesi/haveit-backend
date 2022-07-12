export default function(fn) {
	return async (req, res, next) => {
		try {
		
			await fn(req, res, next)
			
		} catch(error) {
		
			next(error)
			
		}
	}
}
