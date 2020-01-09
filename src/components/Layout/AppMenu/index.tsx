import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import ToolBarDivider from '../ToolBarDivider';

const drawerWidth = 292;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

const AppMenu: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      open={false}
      onClose={() => console.log('onClose')}
    >
      <ToolBarDivider />
      {props.children}
    </Drawer>
  );
};

export default AppMenu;
