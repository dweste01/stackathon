import React from 'react'
import SingleGoogleReview from './SingleGoogleReview'

export default class GoogleReview extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let reviews = this.props.res.reviews;

		return (<div >
				  {
				  	(reviews) ? <div>
				  		<p>Overall Google Rating: {this.props.res.rating}</p>
				  		{ reviews.map(review => {
				  			return(<SingleGoogleReview review={review} />)
				  		  })
						}
				  		</div>
				  	: null
				  }
			</div>)
	}
}