import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import store from './store';

import AppContainer from './containers/AppContainer';



const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
  		<Router history={history}>
  		<Route path='/' component={AppContainer} />
		</Router>
	</Provider>,
  document.getElementById('app')
);