import MenuItems, { Items } from 'UI/Menu/MenuItems';

import MenuWrapper from 'UI/Menu/MenuWrapper';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <MenuItems items={Items} />
    </MenuWrapper>
  );
};

export default Menu;
