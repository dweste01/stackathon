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
		let nav = shallow(<Navbar minPrice={3} />);
		let maxButton1 = nav.find("#max").children().get(0)
		let maxButton2 = nav.find("#max").children().get(1)
		let maxButton3 = nav.find("#max").children().get(2)
		let maxButton4 = nav.find("#max").children().get(3)
		let maxButton1wrapper = shallow(maxButton1);
		let maxButton2wrapper = shallow(maxButton2);
		let maxButton3wrapper = shallow(maxButton3);
		let maxButton4wrapper = shallow(maxButton4);

		expect(maxButton1wrapper).to.be.disabled();
		expect(maxButton2wrapper).to.be.disabled();
		expect(maxButton3wrapper).to.not.be.disabled();
		expect(maxButton4wrapper).to.not.be.disabled();
    });

	it('if max price is chosen, min price must be less', () => {
		let nav = shallow(<Navbar maxPrice={2} />);
		let minButton1 = nav.find("#min").children().get(0)
		let minButton2 = nav.find("#min").children().get(1)
		let minButton3 = nav.find("#min").children().get(2)
		let minButton4 = nav.find("#min").children().get(3)
		let minButton1wrapper = shallow(minButton1);
		let minButton2wrapper = shallow(minButton2);
		let minButton3wrapper = shallow(minButton3);
		let minButton4wrapper = shallow(minButton4);

		expect(minButton1wrapper).to.not.be.disabled();
		expect(minButton2wrapper).to.not.be.disabled();
		expect(minButton3wrapper).to.be.disabled();
		expect(minButton4wrapper).to.be.disabled();
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
