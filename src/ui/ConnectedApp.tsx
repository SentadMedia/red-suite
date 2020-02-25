import { AppBar, AppMenu, WrapperWithMenu } from './';

import Menu from './Menu';
import React from 'react';

// import Divider from '@material-ui/core/Divider';

interface ConnectedApp {
  children?: React.ReactNode;
}

const ConnectedApp: React.FC<ConnectedApp> = props => {
  return (
    <React.Fragment>
      <AppBar />
      <AppMenu>
        <Menu />
      </AppMenu>

      <WrapperWithMenu>{props.children}</WrapperWithMenu>
    </React.Fragment>
  );
};

export default ConnectedApp;
