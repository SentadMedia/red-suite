import ContentWrapper from './ContentWrapper';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';
import SecondaryMenu from './SecondaryMenu';
import ToolBarDivider from './ToolBarDivider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface WrapperWithMenu {
  children?: React.ReactNode;
}

const WrapperWithMenu: React.FC<WrapperWithMenu> = props => {
  return (
    <React.Fragment>
      <SecondaryMenu>
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
      </SecondaryMenu>

      <main>
        <ToolBarDivider />
        <Toolbar>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="h6">Kubernetes</Typography>
        </Toolbar>
        <Divider />
        <ContentWrapper>{props.children}</ContentWrapper>
      </main>
    </React.Fragment>
  );
};

export default WrapperWithMenu;
