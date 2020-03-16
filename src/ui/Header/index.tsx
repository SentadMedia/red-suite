import AppBar from '@material-ui/core/AppBar';
import HeaderLogo from 'ui/header/headerLogo';
import React from 'react';
import { Theme } from 'ui';
import ToggleMenuIcon from 'ui/header/toggleMenuIcon';
import Toolbar from '@material-ui/core/Toolbar';

export const Header: React.FC<{}> = () => {
  return (
    <AppBar position="fixed" style={{ zIndex: Theme.zIndex.drawer + 101 }}>
      <Toolbar style={{ minHeight: 48 }}>
        {/* Menu Toggle Icon  */}
        <ToggleMenuIcon />

        {/* WebSite Name  */}
        <HeaderLogo text="SantaMail" />

        {/* Separator  */}
        <div style={{ flexGrow: 1 }} />

        {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton> */}

        {/* <IconButton color="inherit">
            <AccountCircle />
          </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
