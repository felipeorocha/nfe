import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header'

import Main from './Main';
import Summary from './Summary';

const Routes = () => (
  <div>
    <BrowserRouter>
    <Header content="Shop" className="header-container" />
      <Switch>
        <Route path='/' exact component={Main} />
        {/* <Route path='/summary' render={(routeProps) => (<Summary {...routeProps} {...props} />)} /> */}
        <Route path='/summary' render={Summary} />
/>
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
