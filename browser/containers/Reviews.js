import React from 'react'
import GoogleReview from './GoogleReview'
import YelpReview from './YelpReview'
import Photos from './Photos'

export default class ResReviews extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const restaurant = this.props.selectedRes;
		console.log(this.props)
		let dollars = ""
		let num = restaurant.price_level;
		while (num) {
			dollars += "$";
			num--;
		}
		return (<div className="panel panel-default" style={{'marginTop': 20}}>
				  <div className="panel-body">
				  {
				  	(restaurant.name) ? <div><h2>{restaurant.name} </h2> <h3 style={{'color': 'green'}}> {dollars}</h3><h3>{restaurant.formatted_address}</h3></div>
				  	: <div><h2>Select a Restaurant</h2></div>
				  }
				    <div className="panel panel-default col-md-6">
				  		<div className="panel-body">
				  			<img src='files/google.png' height='50%' width='50%' className='col-md-6 col-md-offset-3'></img>
							<GoogleReview res={this.props.selectedRes} />
				  		</div>
				  	</div>

				  	<div className="panel panel-default col-md-6">
				  		<div className="panel-body">
				  			<img src='files/yelp.png' id='yelp' height='50%' width='50%' className='col-md-6 col-md-offset-3' />
							<YelpReview rating={this.props.yelpRating} reviews={this.props.yelpInfo} />
				  		</div>
				  	</div>

				  	<div className="panel panel-default col-md-6 col-md-offset-3">
				  		<div className="panel-body">
				  		<Photos googlePics={restaurant.photos} />
				  		</div>
				  	</div>

				  </div>
				</div>)
	}
							// <Insta latLng=restaurant />
}