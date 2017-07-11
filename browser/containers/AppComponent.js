import React from 'react'
import Navbar from './Navbar'
import MapComp from './Map'


export default (props) => {
		return(
			<div>
				<Navbar toggleDelivery={props.toggleDelivery} delivery={props.delivery} minPrice={props.minPrice}
						maxPrice={props.maxPrice} toggleMinPrice={props.toggleMinPrice} toggleMaxPrice={props.toggleMaxPrice} />
				<div className='navbar-offset'>
					<MapComp deliveryOnly={props.delivery} selectedRestaurant={props.selectedRestaurant}
							setSelectedRestaurant={props.setSelectedRestaurant} yelpRating={props.yelpRating}
							yelpInfo={props.yelpInfo} minPrice={props.minPrice} maxPrice={props.maxPrice}/>
				</div>
			</div>)
}




