import React, { Component } from 'react';
import { History } from 'history';
import { Provider as ReduxProvider } from 'react-redux';
import Routes from './Routes';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apolloClient';

interface IProps {
  history: History<any>;
  store: any;
}

export class App extends Component<IProps> {
  render = () => {
    const { store, history } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <ReduxProvider store={store}>
          <Routes history={history} />
        </ReduxProvider>
      </ApolloProvider>
    );
  };
}
