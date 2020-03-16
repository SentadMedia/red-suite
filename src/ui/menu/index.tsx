import MenuItems, { Items } from 'ui/menu/menuItems';

import MenuWrapper from 'ui/menu/menuWrapper';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <MenuItems items={Items} />
    </MenuWrapper>
  );
};

export default Menu;
