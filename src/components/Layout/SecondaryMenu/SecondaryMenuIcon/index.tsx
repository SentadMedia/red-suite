import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';


const SecondaryMenuIcon: React.FC = () => 
    <Toolbar>
        <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <Typography variant="h6">
            Kubernetes
        </Typography>
    </Toolbar>

export default SecondaryMenuIcon;