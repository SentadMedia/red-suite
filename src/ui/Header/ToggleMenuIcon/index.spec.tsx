import ConnectedToggleMenuIcon, { ToggleMenuIcon } from '.';
import { mount, shallow } from 'enzyme';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Provider } from 'react-redux';
import React from 'react';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const setUp = (
  menuOpen: boolean = false,
  openMenu: Function,
  closeMenu: Function
) =>
  shallow(
    <ToggleMenuIcon
      menuOpen={menuOpen}
      classes={{ menuButton: '' }}
      openMenu={openMenu}
      closeMenu={closeMenu}
    />
  );

describe('ToggleMenuIcon', () => {
  describe('Functional component', () => {
    let toggleMenuIcon: any;
    let icon: any;
    let openMenu: Function;
    let closeMenu: Function;

    beforeEach(() => {
      openMenu = jest.fn();
      closeMenu = jest.fn();
      toggleMenuIcon = setUp(false, openMenu, closeMenu);
    });

    it('Should render without errors', () => {
      expect(toggleMenuIcon).toMatchSnapshot();
    });

    it('Should contain 1 IconButton', () => {
      expect(toggleMenuIcon.find(IconButton)).toHaveLength(1);
    });

    it('Should contain 1 MenuIcon', () => {
      expect(toggleMenuIcon.find(MenuIcon)).toHaveLength(1);
    });

    it("Should open menu if it's closed", () => {
      icon = toggleMenuIcon.find(IconButton).at(0);
      icon.simulate('click');
      expect(openMenu).toHaveBeenCalledTimes(1);
    });

    it("Should close menu if it's open", () => {
      toggleMenuIcon = setUp(true, openMenu, closeMenu);
      icon = toggleMenuIcon.find(IconButton).at(0);
      icon.simulate('click');
      expect(closeMenu).toHaveBeenCalledTimes(1);
    });
  });

  describe('Connected component', () => {
    let wrapper: any, store: any, connectedToggleMenuIcon: any, icon: any;

    beforeEach(() => {
      const initialState = { app: { menuOpen: false } };

      store = mockStore(initialState);
      // Shallow render the container passing in the mock store
      wrapper = mount(
        <Provider store={store}>
          <ConnectedToggleMenuIcon />
        </Provider>
      );

      connectedToggleMenuIcon = wrapper.find(ToggleMenuIcon);
      icon = connectedToggleMenuIcon.find(IconButton).at(0);
    });

    it('should start with the menu closed', () => {
      const { menuOpen } = connectedToggleMenuIcon.props();
      expect(menuOpen).toBe(false);
    });

    it('Should dispatch openMenu action', () => {
      icon.simulate('click');
      const actions = store.getActions();
      expect(actions).toEqual([{ type: 'APP_MENU_OPEN' }]);
    });

    it('Should dispatch closeMenu action', () => {
      const initialState = { app: { menuOpen: true } };

      store = mockStore(initialState);
      // Shallow render the container passing in the mock store
      wrapper = mount(
        <Provider store={store}>
          <ConnectedToggleMenuIcon />
        </Provider>
      );

      connectedToggleMenuIcon = wrapper.find(ToggleMenuIcon);
      icon = connectedToggleMenuIcon.find(IconButton).at(0);

      icon.simulate('click');
      const actions = store.getActions();
      expect(actions).toEqual([{ type: 'APP_MENU_CLOSE' }]);
    });
  });
});
