import { QueryRenderer, graphql } from 'react-relay';

import LoadingPage from '../pages/LoadingPage';
import React from 'react';
import { Subtract } from 'utility-types';
import environment from '../RelayEnvironment';

interface currentUserProps {
  currentUser: any;
}

interface currentUserQueryResponse {
  error: Error | null;
  props: any;
}

const query = graphql`
  query WithCurrentUserQuery {
    hello
  }
`;

export default function withCurrentUser<T extends currentUserProps>(
  Component: React.ComponentType<T>
) {
  return class extends React.Component<Subtract<T, currentUserProps>> {
    render() {
      return (
        <QueryRenderer
          environment={environment}
          variables={{}}
          query={query}
          render={({ error, props }: currentUserQueryResponse) => {
            if (error) {
              console.error('Error fetching current user', error); // TODO dispatch server error
              return <Component {...(this.props as T)} currentUser={{}} />;
            }
            if (!props) {
              return <LoadingPage />;
            }
            return (
              <Component {...(this.props as T)} currentUser={props.hello} />
            );
          }}
        />
      );
    }
  };
}
