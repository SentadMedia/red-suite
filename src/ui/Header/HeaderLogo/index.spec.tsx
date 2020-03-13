import HeaderLogo from 'UI/Header/HeaderLogo';
import React from 'react';
import { shallow } from 'enzyme';

describe('HeaderLogo', () => {
  let headerLogo: any;

  beforeEach(() => {
    headerLogo = shallow(<HeaderLogo text="SantaMail" />);
  });

  it('Should render without errors', () => {
    expect(headerLogo).toMatchSnapshot();
  });

  it('Should render with the correct text', () => {
    const text = headerLogo.props().children;
    expect(text).toBe('SantaMail');
  });
});
