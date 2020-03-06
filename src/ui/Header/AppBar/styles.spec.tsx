import withStyles, { styles } from './styles';

import { AppTopBar } from '.';
import React from 'react';
import { shallow } from 'enzyme';
import theme from 'ui/Theme';

describe('AppBar styles', () => {
  it('Should return a style object', () => {
    const expected = {
      appBar: { zIndex: theme.zIndex.drawer + 101 },
      toolBar: { minHeight: 48 },
      grow: { flexGrow: 1 }
    };
    const result = styles(theme);
    expect(result).toStrictEqual(expected);
  });

  it('Should inject a classes prop', () => {
    const WrappedComponent = withStyles(AppTopBar);
    const wrapped = shallow(<WrappedComponent />);
    expect(wrapped.props().classes).toBeDefined();
  });
});
