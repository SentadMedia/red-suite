import { mount, shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';
import { LoadingPage } from 'pages';
import React from 'react';
import Spinner from 'react-spinkit';
import { Theme } from 'ui/shared';
import { findByTestAttr } from 'tests';

describe('LoadingPage', () => {
  let loadingPage: any;

  beforeEach(() => {
    loadingPage = mount(<LoadingPage theme={Theme} />);
  });

  it('Should render without errors', () => {
    expect(loadingPage).toMatchSnapshot();
  });

  // it('Should render a container wrapper', () => {
  //   const wrapper = loadingPage.find('[data-testid="wrapperGrid"]')
  //   // const wrapper = findByTestAttr(loadingPage, 'wrapperGrid');
  //   // console.log(wrapper.debug())
  //   expect(wrapper.find(Spinner)).toHaveLength(1);
  // });

  // it('Should have an innerGrid', () => {
  //   const wrapper = findByTestAttr(loadingPage, 'wrapperGrid');
  //   const innerGrid = findByTestAttr(wrapper, 'innerGrid');
  //   expect(innerGrid).toHaveLength(1);
  // });

  // it('Should have Spinner component', () => {
  //   const wrapper = findByTestAttr(loadingPage, 'wrapperGrid');
  //   const innerGrid = findByTestAttr(wrapper, 'innerGrid');
  //   const spinner = findByTestAttr(innerGrid, 'spinner');
  //   expect(spinner).toHaveLength(1);
  // });

  // it('Should have 2 Grid components', () => {
  //   expect(loadingPage.find(Grid)).toHaveLength(2);
  // });

  // it('Should have 1 Spinner components', () => {
  //   expect(loadingPage.find(Spinner)).toHaveLength(1);
  // });
});