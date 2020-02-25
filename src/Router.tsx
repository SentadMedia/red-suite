import { AuthRoutes, ProtectedRoutes } from './routes';

import { ConnectedApp } from './ui';
import React from 'react';
import withCurrentUser from './component/WithCurrentUser';

interface RoutePropss {
  currentUser: any;
}

const renderRoutes = (currentUser: any) => {
  if (currentUser !== null) {
    return (
      <ConnectedApp>
        <ProtectedRoutes />
      </ConnectedApp>
    );
  }
  return <AuthRoutes />;
};

const Routes = ({ currentUser }: RoutePropss) => {
  return renderRoutes(currentUser);
};

export default withCurrentUser(Routes);
