import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from "react-router"

/* import modules for routes*/
import Main from './components/Main';
import FullClassComponent from './components/FullClassComponent';
import StatelessComponent from './components/StatelessComponent';


export default (
        <Route path="/" component={Main}>
            <IndexRoute component={FullClassComponent} />
            <Route path="/stateless" component={StatelessComponent}/>
        </Route>

);