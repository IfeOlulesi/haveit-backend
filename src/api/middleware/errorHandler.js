export default function(err, req, res, next) {
	res.json(err.message)
}
