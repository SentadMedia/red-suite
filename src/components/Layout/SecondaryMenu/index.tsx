import React from 'react';
import classNames from 'classnames';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SecondaryMenuIcon from './SecondaryMenuIcon'
import ToolBarDivider from '../ToolBarDivider'

const drawerWidth = 256;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...theme.mixins.toolbar,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      list: {
        paddingTop: '8 px',
        paddingBottom: '8 px',
      }
  }),
);

const SecondaryMenu: React.FC = (props) => {
    const classes = useStyles();
    
    return (
        <Drawer variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: true,
            [classes.drawerClose]: false,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: true,
              [classes.drawerClose]: false,
            }),
          }}
          open={true}
        >
            <ToolBarDivider />
            <SecondaryMenuIcon />
            <Divider />
            {props.children}
        </Drawer>
    );
}

export default SecondaryMenu;