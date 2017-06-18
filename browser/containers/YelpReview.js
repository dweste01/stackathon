import React from 'react'

export default class YelpReview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const reviews = this.props.reviews;
		const rating = this.props.rating;
		console.log("yelp reviews: ", reviews, 'yelp rating: ', rating)

		return (<div>
				  {
				  	(reviews.length) ? <div>
				  		<p>Overall Yelp Rating: {rating}</p>
				  		{ reviews.map(review => {
				  			let stars = [];
							for (let i = 0; i < review.rating; i++) {
								stars.push(<span className="glyphicon glyphicon-star" key={i} aria-hidden="true"></span>)
							}
							return (<div key={review.time_created} className="panel panel-default" style={{'marginTop': 20}}>
										<div className="panel-body">
											<p>{stars}</p>
											<p>{review.text}</p>
										</div>
									</div>)
						  })
						}
				  	</div>
				  	: null
				  }
				</div>)
	}
}