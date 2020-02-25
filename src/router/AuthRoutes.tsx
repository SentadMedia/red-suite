import { Redirect, Route, Switch } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import React from 'react';

const routes = () => {
  console.log('Auth Routes');
  return (
    <Switch>
      <Route exact path="/login" render={() => <LoginPage />} />
      <Route
        render={({ location }) => (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )}
      />
    </Switch>
  );
};

export default routes;
