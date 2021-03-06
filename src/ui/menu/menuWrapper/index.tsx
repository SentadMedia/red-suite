import { createStyles, makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import { ToolBarDivider } from 'ui/shared';
import { connect } from 'react-redux';

interface MenuWrapperProps {
  menuOpen: boolean;
  closeMenu: any;
}

const drawerWidth = 292;

const useStyles = makeStyles(
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    }
  })
);

export const MenuWrapper: React.FC<MenuWrapperProps> = props => {
  const classes = useStyles();
  const { menuOpen, closeMenu } = props;

  return (
    <Drawer
      variant="temporary"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      open={menuOpen}
      onClose={closeMenu}
    >
      <ToolBarDivider />
      {props.children}
    </Drawer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    menuOpen: state.app.menuOpen
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeMenu: () => dispatch({ type: 'APP_MENU_CLOSE' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuWrapper);
