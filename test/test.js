'use strict'

import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount, shallow } from 'enzyme'
import AppContainer from '../browser/containers/AppContainer.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from '../browser/store.js'
import reducer from '../browser/reducers'
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import MapComp from '../browser/containers/Map.js'
import Navbar from '../browser/containers/Navbar.js'
// const history = createBrowserHistory();

chai.use(chaiEnzyme())

describe('Price filters', function() {
	let testStore;
	beforeEach('create test store', () => {
		testStore = createStore(reducer)
	})

	it('if min price is chosen, max price must be greater', () => {
		let nav = shallow(<Navbar />);
		testStore.dispatch({type: "SET_MIN_PRICE", minPrice: 3})
		let maxButton1 = nav.find("#max").children().get(0)
		console.log(maxButton1)
		// make a wrapper for the ReactElement that gets returned
		let buttonwrapper = shallow(maxButton1);

		expect(buttonwrapper).to.be.disabled();
    });

	it('if max price is chosen, min price must be less', () => {

	})
})

describe('Map Component', function() {
    // let wrapper;
    // before(() => {
    // 	wrapper = mount(<Provider store={store}>
				// 		  		<Router history={history}>
				// 			  		<Route path='/' component={AppContainer}>
				// 			  		</Route>
				// 				</Router>
				// 			</Provider>);
    // });

    // it('renders Google Map', function(done) {
    //   // wait for map to finish loading
    //   setTimeout(() => {
    //   	expect(wrapper.find("#mapid").children()).to.have.length(1);
    //   	done();
    //   }, 1500)
    // });

    // it('renders markers on map', function(done) {
	   //  setTimeout(() => {
	   // 		expect(wrapper.find('MapComp').prop('markersShowing')).to.have.length(38);
	   // 		done();
	   //  }, 1500)
    // })
});
