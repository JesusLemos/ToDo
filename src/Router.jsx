import React from 'react';
// import {browser}
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import App from './container/App'

function Router() {

    return(
       <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
                </Switch>
          </BrowserRouter>
    )
}

export default Router