const router = require('express').Router();
const axios = require('axios');

// require('../../secrets')


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
	}).catch(next)
})

router.use(`/yelp/bizId/:businessId`, (req, res, next) => {
	axiosYelp.get(`https://api.yelp.com/v3/businesses/${req.params.businessId}/reviews`)
	.then(revs => {
		console.log('returned reviews: ', revs)
		res.send(revs.data.reviews)
	}).catch(next)
})

router.post(`/insta/:code`, (req, res, next) => {
	console.log('hellllooooo')
	let instaInfo = new FormData();
	instaInfo.append('client_id', process.env.INSTA_CID);
	instaInfo.append('client_secret',process.env.INSTA_SECRET);
	instaInfo.append('grant_type', 'authorization_code');
	instaInfo.append('redirect_uri', 'https://live2eat.herokuapp.com/');
	instaInfo.append('code', req.params.code);
	console.log(instaInfo)
	$.ajax('https://api.instagram.com/oauth/access_token', {
		method: 'POST',
		data: instaInfo,
		url: 'https://api.instagram.com/oauth/access_token'
	})
	// alert(instaInfo)
	// axios.post('https://api.instagram.com/oauth/access_token', instaInfo)
	// .then(token => {
	// 	console.log(token);
	// 	res.send(token);
	// })
})


router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
