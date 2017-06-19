import React from 'react'
import SingleGoogleReview from './SingleGoogleReview'

export default class GoogleReview extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let reviews = this.props.res.reviews;
		let rating = this.props.res.rating/1.0
		let color = ''
		if (this.props.res.rating >= 4) {
			color = 'green'
		} else if (this.props.res.rating >= 3) {
			color = '#fce200'
		} else color = 'red'

		return (<div >
				  {
				  	(reviews) ? <div>
				  		<p className="col-md-7 col-md-offset-3" style={{'clear': 'left'}}>Overall Google Rating: <span style={{'fontWeight': 'bold', 'fontSize': 18, "color": color}}>{rating}</span></p>
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