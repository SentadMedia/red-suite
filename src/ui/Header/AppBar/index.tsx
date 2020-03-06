import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import { ToggleMenuIcon } from 'ui/Header';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withAppBarStyles from 'ui/Header/AppBar/styles';

export interface AppTopBarProps {
  classes: any;
}

const AppTopBar: React.FC<AppTopBarProps> = ({ classes }) => {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        {/* Menu Toggle Icon  */}
        <ToggleMenuIcon />

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

export default withAppBarStyles(AppTopBar);
