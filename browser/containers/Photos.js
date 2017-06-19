import React from 'react'
import GooglePics from './GooglePics'
require('../../secrets')

export default class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.instaLogin = this.instaLogin.bind(this);
	}

	instaLogin() {

	}

	render() {
		let instaLink=``
		return(<div className="panel panel-default" style={{'marginTop': 20}}>
				  <div className="panel-body">
				  <img src="/files/google.png" height="50%" width="50%" />
				  <GooglePics pics={this.props.googlePics} />
				  <button onClick={this.instaLogin} className="btn btn-default">
					  <a target="_blank" href={`https://api.instagram.com/oauth/authorize/?client_id=${process.env.INSTA_CID}&redirect_uri=localhost:3000}&response_type=code`}>Click Here for Instagram Photos</a>
				  </button>
				  </div>
				</div>
			)
	}
}