import Menu from 'UI/Menu';
import MenuItems from 'UI/Menu/MenuItems';
import MenuWrapper from 'UI/Menu/MenuWrapper';
import React from 'react';
import { shallow } from 'enzyme';

describe('Menu', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Menu />);
  });

  it('Should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should have 1 MenuWrapper component', () => {
    expect(wrapper.find(MenuWrapper)).toHaveLength(1);
  });
  it('Should have 1 MenuItems component', () => {
    expect(wrapper.find(MenuItems)).toHaveLength(1);
  });
});
