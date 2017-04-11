import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import Routes from './Routes'
import { Provider } from 'react-redux';

import * as budgetActions from './actions/budgetActions';

import configureStore from './store/configureStore';
const store = configureStore();

store.dispatch(budgetActions.fetchItems());

ReactDOM.render(
    <Provider store={store}>
        <Router routes={Routes} history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);



