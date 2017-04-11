import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from "react-router"

/* import modules for routes*/
import Main from '../app/components/Main';
import FullClassComponent from '../app/components/FullClassComponent';
import StatelessComponent from '../app/components/StatelessComponent';


export default (
        <Route path="/" component={Main}>
            <IndexRoute component={FullClassComponent} />
            <Route path="/stateless" component={StatelessComponent}/>
        </Route>

);