import ConnectedMenuWrapper, { MenuWrapper } from 'UI/Menu/MenuWrapper';
import { mount, shallow } from 'enzyme';

import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import { ToolBarDivider } from 'UI/Shared';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const setUp = (menuOpen: boolean = false, closeMenu: Function) =>
  shallow(<MenuWrapper menuOpen={menuOpen} closeMenu={closeMenu} />);

describe('MenuWrapper', () => {
  describe('Functional Component', () => {
    let wrapper: any, closeMenu: Function;

    beforeEach(() => {
      closeMenu = jest.fn();
      wrapper = setUp(false, closeMenu);
    });

    it('Should render without errors', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should have 1 Drawer component', () => {
      expect(wrapper.find(Drawer)).toHaveLength(1);
    });
    it('Should have 1 ToolBarDivider component', () => {
      expect(wrapper.find(ToolBarDivider)).toHaveLength(1);
    });
    it('Should be closed by default', () => {
      expect(wrapper.props().open).toBe(false);
    });
  });

  describe('ConnectedComponent', () => {});
});
