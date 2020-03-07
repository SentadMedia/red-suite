import { AuthRoutes, ProtectedRoutes } from 'Routes';
import { Header, Menu, PageWrapper } from 'UI';
import React, { Component } from 'react';

import { QueryRenderer } from 'react-relay';
import currentUserQuery from 'Routes/gql/queries/currentUser';
import { relayEnvironment } from 'Config';

// import { LoadingPage } from 'Pages';

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
              return (
                <React.Fragment>
                  <Header />
                  <Menu />
                  <PageWrapper>
                    <ProtectedRoutes />
                  </PageWrapper>
                </React.Fragment>
              );
              // return <div>505 ERROR</div>;
            }
          }
          if (!props) {
            // return <LoadingPage />;
            return (
              <React.Fragment>
                <Header />
                <Menu />
                <PageWrapper>
                  <ProtectedRoutes />
                </PageWrapper>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment>
              <Header />
              <Menu />
              <PageWrapper>
                <ProtectedRoutes />
              </PageWrapper>
            </React.Fragment>
          );
        }}
      />
    );
  };
}
