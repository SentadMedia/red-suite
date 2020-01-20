import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthService } from '../service/Auth.service';

interface ProtectedRouteProps extends RouteProps {
  auth: AuthService;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  auth,
  ...rest
}) => {
  return (
    <Route
      render={({ location }) =>
        auth.isSignedIn() ? (
          { component }
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
      {...rest}
    />
  );
};
