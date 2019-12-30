import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home/Home';
import Projects from './projects/Projects';
import PageNotFound from './PageNotFound';

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Home}
      />
      <Route
        path='/projects'
        component={Projects}
      />
      <Route
        component={PageNotFound}
      />
    </Switch>
  )
}

export default Routes;
