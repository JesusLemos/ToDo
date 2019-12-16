import React from 'react';
// import {browser}
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import Main from './container/Main'

function Router() {

    return(
       <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main} />
                </Switch>
          </BrowserRouter>
    )
}

export default Router