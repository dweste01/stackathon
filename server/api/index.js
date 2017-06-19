const router = require('express').Router();
const axios = require('axios');
if (process.env.NODE_ENV != 'production') {
	require('../../secrets')
}

router.use('/googlePlace/:placeId', (req, res, next) => {
	axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.params.placeId}&key=${process.env.GOOGLE_API_KEY}`)
	.then(place => {
		res.send(place.data);
	}).catch(console.log)
})


const axiosYelp = axios.create({
	headers: {'Authorization': `Bearer ${process.env.YELP_ACCESS_TOKEN}`}
})

router.use('/yelp/phone/:phoneNum', (req, res, next) => {
	axiosYelp.get(`https://api.yelp.com/v3/businesses/search/phone?phone=${req.params.phoneNum}`)
	.then(yelpResults => {
		console.log('yelp results: ', yelpResults.data.businesses[0])
		res.send(yelpResults.data.businesses[0]);
	}).catch(console.log)
})

router.use(`/yelp/bizId/:businessId`, (req, res, next) => {
	axiosYelp.get(`https://api.yelp.com/v3/businesses/${req.params.businessId}/reviews`)
	.then(revs => {
		console.log('returned reviews: ', revs)
		res.send(revs.data.reviews)
	}).catch(console.log)
})


router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
