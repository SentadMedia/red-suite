import MenuItems, { Items } from 'UI/Menu/MenuItems';

import AppMenuItem from 'UI/Menu/MenuItem';
import List from '@material-ui/core/List';
import React from 'react';
import { shallow } from 'enzyme';

describe('MenuItems', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<MenuItems items={Items} />);
  });

  it('Should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should contain 1 List component', () => {
    expect(wrapper.find(List)).toHaveLength(1);
  });

  it(`Should contain ${Items.length} List component(s)`, () => {
    expect(wrapper.find(AppMenuItem)).toHaveLength(Items.length);
  });
});
