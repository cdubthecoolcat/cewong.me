import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home/Home';
import Projects from './projects/Projects';

function Routes() {
  return (
    <Switch>
      <Route
        path='/projects'
        component={Projects}
      />
      <Route
        path='/'
        component={Home}
      />
    </Switch>
  )
}

export default Routes;
