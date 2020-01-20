import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import withCurrentUser from './WithCurrentUser';
import { History } from 'history';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import asyncComponent from './AsyncComponent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AuthRoutes from './AuthRoutes';
import { AppBar, AppMenu, WrapperWithMenu } from './ui';
import { Route } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const NotFoundPage = asyncComponent(() =>
  import(/* webpackChunkName: "NotFoundPage" */ './pages/NotFoundPage')
);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh'
  }
}));

const renderRoutes = (currentUser: any) => {
  if (currentUser) {
    return (
      <React.Fragment>
        <AppBar />
        <AppMenu>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </AppMenu>

        <WrapperWithMenu>
          <Route component={NotFoundPage} />
        </WrapperWithMenu>
      </React.Fragment>
    );
  }
  return <AuthRoutes />;
};

interface RoutePropss {
  currentUser: any;
  history: History<any>;
}

const Routes = ({ currentUser, history }: RoutePropss) => {
  const classes = useStyles();
  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Switch>{renderRoutes(currentUser)}</Switch>
        </Grid>
      </ThemeProvider>
    </ConnectedRouter>
  );
};

export default withCurrentUser(Routes);
