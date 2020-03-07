import AppMenuItem from 'UI/Menu/MenuItem';
import Items from 'UI/Menu/MenuItems/Items';
import List from '@material-ui/core/List';
import React from 'react';

interface IMenuItem {
  name: string;
  Icon: any;
  items?: IMenuItem[];
}

interface AppMenuProps {
  items: IMenuItem[];
}

const AppMenu: React.FC<AppMenuProps> = ({ items }) => {
  return (
    <List component="nav" disablePadding>
      {items.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

export { Items };
export default AppMenu;
