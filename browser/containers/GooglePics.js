import React from 'react'

export default class GooglePics extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(<div>
				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
				  <div className="carousel-inner">
				  {
				  	// this.props.pics && this.props.pics.map(pic => {
				  	// 			  	return (
				  	// 			  		<div className="item active">
				  	// 				      <div className="d-block img-fluid"> {pic.html_attributions} </div>
				  	// 				    </div>)
				  	// 			  })
				  }
				    <div className="item active">
				      <img className="d-block img-fluid" src="/files/google.png" width="50%" height="50%" alt="First slide" />
				    </div>
				    <div className="item">
				      <img className="d-block img-fluid" src="/files/google.png" width="50%" height="50%" alt="Second slide" />
				    </div>
				    <div className="item">
				      <img className="d-block img-fluid" src="/files/google.png" width="50%" height="50%" alt="Third slide" />
				    </div>

				  </div>
				  <a className="left carousel-control" href="#carouselExampleControls" role="button" data-slide="prev">
				    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="sr-only">Previous</span>
				  </a>
				  <a className="right carousel-control" href="#carouselExampleControls" role="button" data-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="sr-only">Next</span>
				  </a>
				</div>
			</div>)

	}
}