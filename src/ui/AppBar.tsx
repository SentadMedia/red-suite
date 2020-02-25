import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 101
    },
    toolBar: {
      minHeight: 48
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    },
    grow: {
      flexGrow: 1
    }
  })
);

interface AppTopBarProps {
  menuOpen: boolean;
  openMenu: any;
  closeMenu: any;
}

const AppTopBar: React.FC<AppTopBarProps> = props => {
  const classes = useStyles();
  const { menuOpen, openMenu, closeMenu } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        {/* Menu Toggle Icon  */}
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Open drawer"
          onClick={menuOpen ? closeMenu : openMenu}
        >
          <MenuIcon />
        </IconButton>

        {/* WebSite Name  */}
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
        >
          SantaMail
        </Typography>

        {/* Separator  */}
        <div className={classes.grow} />

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: any /*, ownProps*/) => {
  return {
    menuOpen: state.app.menuOpen
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    openMenu: () => dispatch({ type: 'APP_MENU_OPEN' }),
    closeMenu: () => dispatch({ type: 'APP_MENU_CLOSE' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppTopBar);
