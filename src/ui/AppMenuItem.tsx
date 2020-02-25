import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { NavLink, NavLinkProps } from 'react-router-dom';

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import { Omit } from '@material-ui/types';
import React from 'react';

interface AppMenuItemProps {
  name: String;
  link?: String;
  Icon?: React.ElementType;
  items?: Array<AppMenuItemProps>;
}

const AppMenuItem: React.FC<AppMenuItemProps> = (props: AppMenuItemProps) => {
  const { name, Icon, items = [], link } = props;
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  //   React.forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'innerRef' | 'to'>>(
  //   (itemProps, ref) => (
  const AdapterLink = React.forwardRef<
    HTMLAnchorElement,
    Omit<NavLinkProps, 'innerRef' | 'to'>
  >((props, ref) => <NavLink innerRef={ref as any} {...props} />);

  const MenuItemRoot = (
    <ListItem button onClick={handleClick} component={AdapterLink} to={link}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItem>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open}>
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

export default AppMenuItem;
