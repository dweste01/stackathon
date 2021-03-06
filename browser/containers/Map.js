
import React from 'react'
import Reviews from './Reviews'


export default class MapComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currPos: {lat: 40.750120, lng: -73.985099}, // default location: nyc midtown,
			mapObj: {},
			colors: {1: '#00ff77',
					 2: '#00db66',
					 3: '#018c41',
					 4: '#015e2c'},
			selectedMarker: {}
		}
		this.markersShowing = [];
		this.places = [];
		this.componentDidMount = this.componentDidMount.bind(this);
		this.showInfo = this.showInfo.bind(this);
	}

	componentDidMount() {
		// set up map
		console.log("Hello")
		const map = new google.maps.Map(document.getElementById('mapid'), {
		  center: this.state.currPos,
		  zoom: 12
		});
		this.setState({'mapObj': map}) // access map obj in render function
		if (navigator.geolocation) {	// if you can get actual location, move to actual location
			navigator.geolocation.getCurrentPosition(pos => {
				this.setState({'currPos': {lat: pos.coords.latitude,
										   lng: pos.coords.longitude}})
				map.setCenter(this.state.currPos);
				map.setZoom(15)
			})
		}
		// re-render when you settle on a new spot for 1 sec
		map.addListener('center_changed', () => {
			window.setTimeout(() => {
				this.setState({'currPos': {lat: map.getCenter().lat(), lng: map.getCenter().lng()}});
			}, 1000)
		})
	}

	showInfo(marker, result) {
		let infoWindow = new google.maps.InfoWindow({ content: `<p>${marker.title}</p>`});
		infoWindow.open(this.state.mapObj, marker)
		this.props.setSelectedRestaurant(result.place_id); // this searches for the google Place
		this.setState({'selectedMarker': {'marker': marker, 'info': infoWindow}})
	}

	render() {
		while(this.markersShowing.length) {
			this.markersShowing.pop().marker.setMap(null)
		}
		if (this.state.selectedMarker.info) {
			this.state.selectedMarker.info.open(this.state.mapObj, this.state.selectedMarker.marker);
		}
		let resTypes = ['restaurant']
		if (this.props.deliveryOnly) resTypes = ['meal_delivery']

		// get nearby places
		const service = new google.maps.places.PlacesService(this.state.mapObj);
		service.nearbySearch({location: this.state.currPos,
								radius: 1000,
							    rankBy: google.maps.places.RankBy.RELEVANCE,
							    minPriceLevel: this.props.minPrice,
							    maxPriceLevel: this.props.maxPrice,
							    types: resTypes},
							  (results, status) => {
							  	if (status === google.maps.places.PlacesServiceStatus.OK) {
							  		results.forEach(place => {
							  			let marker = new google.maps.Marker({
								  			map: this.state.mapObj,
								  			title: place.name,
								  			// animation: google.maps.Animation.DROP,
								  			icon: {path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, strokeWeight: 3, scale: 5, strokeColor: this.state.colors[place.price_level]||'#00ff77'},
								  			position: place.geometry.location
								  			})
							  			marker.addListener('click', () => {
							  				this.showInfo(marker, place);
							  			})
							  			this.markersShowing.push({marker, place})
							  		})
							  	}
							  })
		return(<div className="col-md-8 col-md-offset-2">
				<div id="mapid"></div>
				<Reviews yelpInfo={this.props.yelpInfo} yelpRating={this.props.yelpRating} selectedRes={this.props.selectedRestaurant} />
			   </div>)
	}
}