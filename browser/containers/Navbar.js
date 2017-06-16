import React from 'react'

export default class Navbar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id='myNav'>

				<div className="row my-navbar">
					<div className="col-lg-5">
						{
							(!this.props.delivery) ? 
							<div className="btn-group col-lg-offset-5" style={{'marginTop': 13}}role="group" aria-label="...">
								<button type="button" className="btn btn-default activeResButton">All Restaurants</button>
								<button type="button" onClick={()=> {this.props.toggleDelivery(true)}} className="btn btn-default resButton">Delivery</button>
							</div>
							: <div className="btn-group col-lg-offset-5" style={{'marginTop': 13}}role="group" aria-label="...">
								<button type="button" onClick={()=> {this.props.toggleDelivery(false)}} className="btn btn-default resButton">All Restaurants</button>
								<button type="button" className="btn btn-default activeResButton">Delivery</button>
							</div>
						}
					</div>

					<div className="col-lg-2" id="nav-logo">
					   	<img id="logo" src="files/food.png" />
				    </div>

				    <div className="col-lg-5">
				    </div>

			    </div>
		    </div>
		)
	}
}

