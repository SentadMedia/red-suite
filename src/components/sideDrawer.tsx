import React from 'react';
import classNames from 'classnames';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
        ...theme.mixins.toolbar,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // padding: '0 px',
        minHeight: '48 px',
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

const SideDrawer: React.FC = () => {
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
            <div className={classes.toolbar} />

            <Toolbar>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <Typography variant="h6">
                    Kubernetes
                </Typography>
            </Toolbar>

            <Divider />
            <List className={classes.list}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
    );
}

export default SideDrawer;