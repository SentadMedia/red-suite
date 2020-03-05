import LoadingPageWithTheme, { LoadingPage } from '.';

import React from 'react';
import { shallow } from 'enzyme';

describe('LoadingPage', () => {
  const theme = { palette: { primary: { main: '#24292e' } } };
  it('Renders link to Google', () => {
    const loadingPage = shallow(<LoadingPage theme={theme} />);
    expect(loadingPage).toMatchSnapshot();
  });

  it('Renders link to Google with classname', () => {
    const loadingPage = shallow(<LoadingPage theme={theme} />);
    expect(loadingPage).toMatchSnapshot();
  });
});
