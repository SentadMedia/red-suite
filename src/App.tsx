import React, { Component } from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';

import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { History } from 'history';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes } from 'routes';
import { Theme } from 'ui';

export interface AppProps {
  history: History<any>;
  store: any;
  classes: any;
}

class App extends Component<AppProps> {
  render = () => {
    const { store, history, classes } = this.props;

    return (
      <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={Theme}>
            <Grid container component="main" className={classes.root}>
              <CssBaseline />
              <Routes />
            </Grid>
          </ThemeProvider>
        </ConnectedRouter>
      </ReduxProvider>
    );
  };
}

export default withStyles({ root: { display: 'flex', height: '100vh' } })(App);
