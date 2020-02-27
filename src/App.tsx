import React, { Component } from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';

import { ConnectedRouter } from 'connected-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { History } from 'history';
import { Provider as ReduxProvider } from 'react-redux';
import Router from 'Router';
import { Theme } from './ui';

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
              <Router />
            </Grid>
          </ThemeProvider>
        </ConnectedRouter>
      </ReduxProvider>
    );
  };
}
// const styles = { root: { display: 'flex', height: '100vh' } };
export default withStyles({ root: { display: 'flex', height: '100vh' } })(App);
