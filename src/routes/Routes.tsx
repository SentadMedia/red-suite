import { AuthRoutes, ProtectedRoutes } from 'Routes';
import React, { Component } from 'react';

import { ConnectedApp } from 'ui';
import { LoadingPage } from 'Pages';
import { QueryRenderer } from 'react-relay';
import currentUserQuery from 'Routes/gql/queries/currentUser';
import { relayEnvironment } from 'Config';

export default class NewRouter extends Component<{}> {
  render = () => {
    return (
      <QueryRenderer
        environment={relayEnvironment}
        variables={{}}
        query={currentUserQuery}
        render={({ props, error }: any) => {
          if (error) {
            if (
              error.hasOwnProperty('res') &&
              error.res.hasOwnProperty('errors')
            ) {
              const errors = error.res.errors;
              // GraphqlError
              errors.forEach((e: any) => {
                console.error(e.message);
              });
              return <AuthRoutes />;
            } else {
              console.error(error); // TODO dispatch server error
              return <AuthRoutes />;
              // return <div>505 ERROR</div>;
            }
          }
          if (!props) {
            return <LoadingPage />;
          }
          return (
            <ConnectedApp>
              <ProtectedRoutes />
            </ConnectedApp>
          );
        }}
      />
    );
  };
}
