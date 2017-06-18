import React from 'react'
import GoogleReview from './GoogleReview'
import YelpReview from './YelpReview'

export default class ResReviews extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const restaurant = this.props.selectedRes;
		console.log(this.props)
		return (<div className="panel panel-default" style={{'marginTop': 20}}>
				  <div className="panel-body">
				  {
				  	(restaurant.name) ? <div><h2>{restaurant.name}</h2><h3>{restaurant.formatted_address}</h3></div>
				  	: <div><h2>Pick a restaurant!</h2></div>
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

				  </div>
				</div>)
	}
}