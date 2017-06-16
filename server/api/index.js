const router = require('express').Router();
const axios = require('axios');
require('../../secrets');

router.use('/googlePlace/:placeId', (req, res, next) => {
	axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.params.placeId}&key=${process.env.GOOGLE_API_KEY}`)
	.then(place => {
		console.log("PLACE DETAILS: ", place.data);
		res.send(place.data);
	}).catch(console.log)
})

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
