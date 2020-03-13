import Menu from '.';
import MenuItems from './MenuItems';
import MenuWrapper from './MenuWrapper';
import React from 'react';
import { shallow } from 'enzyme';

describe('Menu', () => {
  let wrapper: any;
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
