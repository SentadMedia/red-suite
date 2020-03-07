import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';
import SecondaryMenuIcon from 'UI/SecondaryMenu/SecondaryMenuIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { shallow } from 'enzyme';

describe('SecondaryMenuIcon', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SecondaryMenuIcon />);
  });

  it('Should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should have 1 Toolbar component', () => {
    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });
  it('Should have 1 ListItemIcon component', () => {
    expect(wrapper.find(ListItemIcon)).toHaveLength(1);
  });
  it('Should have 1 Typography component', () => {
    expect(wrapper.find(Typography)).toHaveLength(1);
  });
});
