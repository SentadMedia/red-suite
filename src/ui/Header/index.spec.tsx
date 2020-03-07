import AppBar from '@material-ui/core/AppBar';
import Header from '.';
import HeaderLogo from './HeaderLogo';
import React from 'react';
import ToggleMenuIcon from './ToggleMenuIcon';
import Toolbar from '@material-ui/core/Toolbar';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('Should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should have 1 AppBar component', () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });
  it('Should have 1 Toolbar component', () => {
    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });
  it('Should have 1 ToggleMenuIcon component', () => {
    expect(wrapper.find(ToggleMenuIcon)).toHaveLength(1);
  });
  it('Should have 1 HeaderLogo component', () => {
    expect(wrapper.find(HeaderLogo)).toHaveLength(1);
  });
});
