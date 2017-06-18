import React from 'react'
import Navbar from './Navbar'
import WaterGraph from './WaterGraph'
import MapComp from './Map'


export default (props) => {
		return(
			<div>
				<Navbar toggleDelivery={props.toggleDelivery} delivery={props.delivery} />
				<div className='navbar-offset'>
					<MapComp deliveryOnly={props.delivery} selectedRestaurant={props.selectedRestaurant}
							setSelectedRestaurant={props.setSelectedRestaurant} yelpRating={props.yelpRating}
							yelpInfo={props.yelpInfo}/>
				</div>
			</div>)
}




