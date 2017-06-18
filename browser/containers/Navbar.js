import React from 'react'

export default class Navbar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log('rendering navbar, props: ', this.props)

		return (
			<div id='myNav'>
				<div className="row my-navbar">
					<div className="col-lg-5">
						{
							(!this.props.delivery) ? 
							<div className="btn-group col-lg-offset-5" style={{'marginTop': 13}} role="group" aria-label="...">
								<button type="button" className="btn btn-default activeResButton">All Restaurants</button>
								<button type="button" onClick={()=> {this.props.toggleDelivery(true)}} className="btn btn-default resButton">Delivery</button>
							</div>
							: <div className="btn-group col-lg-offset-5" style={{'marginTop': 13}} role="group" aria-label="...">
								<button type="button" onClick={()=> {this.props.toggleDelivery(false)}} className="btn btn-default resButton">All Restaurants</button>
								<button type="button" className="btn btn-default activeResButton">Delivery</button>
							</div>
						}
					</div>

					<div className="col-lg-2" id="nav-logo">
					   	<img id="logo" src="files/food.png" />
				    </div>

				    <div className="col-lg-5 col-lg-offset-2" style={{'marginTop': 3}}>
				    	<span>Min Price: </span>
				    		<div id="min" className="btn-group btn-group-xs dollar-button-group" style={{'marginTop': 3}} role="group" aria-label="...">

								{
									(this.props.minPrice==1) ? <button type="button" onClick={() => {this.props.toggleMinPrice(1)}} style={{'color': '#00ff77'}} className="btn btn-default active-dollar-button">$</button>
									: <button type="button" onClick={() => {this.props.toggleMinPrice(1)}} style={{'color': '#00ff77'}} className="btn btn-default dollar-button">$</button>
					     		}
					     		{
									(this.props.maxPrice < 2) ? <button disabled type="button" onClick={() => {this.props.toggleMinPrice(2)}} style={{'color': '#00db66'}} className="btn btn-default dollar-button">$$</button>
									: (this.props.minPrice==2) ? <button type="button" onClick={() => {this.props.toggleMinPrice(2)}} style={{'color': '#00db66'}} className="btn btn-default active-dollar-button">$$</button>
															   : <button type="button" onClick={() => {this.props.toggleMinPrice(2)}} style={{'color': '#00db66'}} className="btn btn-default dollar-button">$$</button>
					     		}
					     		{
									(this.props.maxPrice < 3) ? <button disabled type="button" onClick={() => {this.props.toggleMinPrice(3)}} style={{'color': '#018c41'}} className="btn btn-default dollar-button">$$$</button>
									: (this.props.minPrice==3) ? <button type="button" onClick={() => {this.props.toggleMinPrice(3)}} style={{'color': '#018c41'}} className="btn btn-default active-dollar-button">$$$</button>
															   : <button type="button" onClick={() => {this.props.toggleMinPrice(3)}} style={{'color': '#018c41'}} className="btn btn-default dollar-button">$$$</button>
					     		}
					     		{
							 		(this.props.maxPrice < 4) ? <button disabled type="button" onClick={() => {this.props.toggleMinPrice(4)}} style={{'color': '#015e2c'}} className="btn btn-default dollar-button">$$$$</button>
							 		: (this.props.minPrice==4) ? <button type="button" onClick={() => {this.props.toggleMinPrice(4)}} style={{'color': '#015e2c'}} className="btn btn-default active-dollar-button">$$$$</button>
							 								   : <button type="button" onClick={() => {this.props.toggleMinPrice(4)}} style={{'color': '#015e2c'}} className="btn btn-default dollar-button">$$$$</button>
					     		}
							</div><br />
							<span>Max Price: </span>
							<div className="btn-group btn-group-xs dollar-button-group" style={{'marginTop': 3}} role="group" aria-label="...">
					     		{
					     			(this.props.minPrice > 1) ? <button disabled type="button" onClick={() => {this.props.toggleMaxPrice(1)}} style={{'color': '#00ff77'}} className="btn btn-default dollar-button">$</button>
					     			: (this.props.maxPrice==1) ? <button type="button" onClick={() => {this.props.toggleMaxPrice(1)}} style={{'color': '#00ff77'}} className="btn btn-default active-dollar-button">$</button>
					     									   : <button type="button" onClick={() => {this.props.toggleMaxPrice(1)}} style={{'color': '#00ff77'}} className="btn btn-default dollar-button">$</button>
					     		}
								{
									(this.props.minPrice > 2) ? <button disabled type="button" onClick={() => {this.props.toggleMaxPrice(2)}} style={{'color': '#00db66'}} className="btn btn-default dollar-button">$$</button>
									: (this.props.maxPrice==2) ? <button type="button" onClick={() => {this.props.toggleMaxPrice(2)}} style={{'color': '#00db66'}} className="btn btn-default active-dollar-button">$$</button>
															   : <button type="button" onClick={() => {this.props.toggleMaxPrice(2)}} style={{'color': '#00db66'}} className="btn btn-default dollar-button">$$</button>
								}
								{
									(this.props.minPrice > 3) ? <button disabled type="button" onClick={() => {this.props.toggleMaxPrice(3)}} style={{'color': '#018c41'}} className="btn btn-default dollar-button">$$$</button>
									: (this.props.maxPrice==3) ? <button type="button" onClick={() => {this.props.toggleMaxPrice(3)}} style={{'color': '#018c41'}} className="btn btn-default active-dollar-button">$$$</button>
															   : <button type="button" onClick={() => {this.props.toggleMaxPrice(3)}} style={{'color': '#018c41'}} className="btn btn-default dollar-button">$$$</button>
								}
								{
									(this.props.maxPrice==4) ? <button type="button" onClick={() => {this.props.toggleMaxPrice(4)}} style={{'color': '#015e2c'}} className="btn btn-default active-dollar-button">$$$$</button>
									: <button type="button" onClick={() => {this.props.toggleMaxPrice(4)}} style={{'color': '#015e2c'}} className="btn btn-default dollar-button">$$$$</button>
								}
						</div>
					</div>
			    </div>
		    </div>
		)
	}
}

