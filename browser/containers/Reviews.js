import React from 'react'
import GoogleReview from './GoogleReview'
import YelpReview from './YelpReview'

export default class ResReviews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (<div className="panel panel-default" style={{'marginTop': 20}}>
				  <div className="panel-body">
				    <div className="panel panel-default col-md-6">
				  		<div className="panel-body">
							<GoogleReview />
				  		</div>
				  	</div>
				  	<div className="panel panel-default col-md-6">
				  		<div className="panel-body">
							<YelpReview />
				  		</div>
				  	</div>
				  </div>
				</div>)
	}
}