import React from 'react'

export default class SingleGoogleReview extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		}
	}

	render() {
		let review = this.props.review;
		let stars = [];
		for (let i = 0; i < review.rating; i++) {
			stars.push(<span className="glyphicon glyphicon-star" key={i} aria-hidden="true"></span>)
		}

		return (
		 	<div key={review.time} className="panel panel-default" style={{'marginTop': 20}}>
				<div className="panel-body">
				 	<img src={review.profile_photo_url} width='20' height='20' />
				 	<span>  {stars}</span>
				 	{
				 		(review.text.length>300) ? ((!this.state.expanded) ? <p>{review.text.substring(0, 300)}<a onClick={() => {this.setState({'expanded': !this.state.expanded})}}> more</a></p>
				 												:<p>{review.text}<a onClick={() => {this.setState({'expanded': !this.state.expanded})}}> less</a></p>)
										 		: <p>{review.text}</p>
				 	}
				</div>
			</div>)
	}
}