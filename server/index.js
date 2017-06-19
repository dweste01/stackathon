const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// const FormData = require('form-data')
const axios = require('axios')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let instaAxios = axios.create({
	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})



// require('../secrets')

app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

// bundle needs this line
app.use('/files', express.static(path.join(__dirname, '../public')));

app.use(express.static(path.join(__dirname, '../node_modules')))

app.get('/', (req, res, next) => {
	let c = req.query.code;
	if (c) {
		// var formData = new FormData();
		// formData.append('client_id', process.env.INSTA_CID)
		// formData.append('client_secret', process.env.INSTA_SECRET)
		// formData.append('grant_type', 'authorization_code')
		// formData.append('redirect_uri', 'https://live2eat.herokuapp.com/')
		// formData.append('code', c)

		// let ajaxReq = new XMLHttpRequest();
		// ajaxReq.open("POST", formData, true);
		// ajaxReq.send();

		// $.ajax('https://api.instagram.com/oauth/access_token', {
		// 	method: 'POST',
		// 	data: formData
		// }).then(token => {
		// 	console.log(token)
		// }).catch(console.log)


		// instaAxios.post('https://api.instagram.com/oauth/access_token', formData)
		// .then(token => {
		// 	console.log(token);
		// })
		// .catch(console.log)	
	} else {
		res.sendFile(path.join(__dirname, '../index.html'))
	}
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port 3000");
})

module.exports = app;