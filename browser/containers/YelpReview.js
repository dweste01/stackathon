import React from 'react'

export default class YelpReview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const reviews = this.props.reviews;
		const rating = this.props.rating/1.0;
		let color = ''
		if (rating >= 4) {
			color = 'green'
		} else if (rating >= 3) {
			color = '#fce200'
		} else color = 'red'

		return (<div>
				  {
				  	(reviews.length) ? <div>
				  		<p className="col-md-7 col-md-offset-3" style={{'clear': 'left'}}>Overall Yelp Rating: <span style={{'fontWeight': 'bold', 'fontSize': 18, "color": color}}>{rating}</span></p>
				  		{ reviews.map(review => {
				  			let stars = [];
							for (let i = 0; i < review.rating; i++) {
								stars.push(<span className="glyphicon glyphicon-star" key={i} aria-hidden="true"></span>)
							}
							return (<div key={review.time_created} className="panel panel-default" style={{'marginTop': 20, 'clear': 'left'}}>
										<div className="panel-body">
											<a href={review.url}>{stars}</a>
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