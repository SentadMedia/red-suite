import { Redirect, Route, Switch } from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';

const routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/login"
        render={() => <Redirect to={{ pathname: '/' }} />}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default routes;
