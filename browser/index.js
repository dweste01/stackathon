import scss from '../index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import store from './store';
import {getAccessToken} from './action-creators'

import AppContainer from './containers/AppContainer';

import { retrieveData } from './action-creators'

const history = createBrowserHistory();

const getInstaToken = nextRouterState => {
	let code = nextRouterState.params.instaCode;
	store.dispatch(getAccessToken(code));
}

ReactDOM.render(
	<Provider store={store}>
  		<Router history={history}>
	  		<Route path='/' component={AppContainer}>
	  		</Route>
		</Router>
	</Provider>,
  document.getElementById('app')
);
  			// <Route path='/code=:instaCode' component={AppContainer} onEnter={getInstaToken} />
