import LoadingPage, { LoadingPageProps } from 'pages/LoadingPage';

import React from 'react';
import { shallow } from 'enzyme';

const setup = (props: LoadingPageProps = { theme: null }) => {
  const c = shallow(<LoadingPage {...props} />);
  return c;
};

const findByTestAttribute = (component: any, attr: String) => {
  return component.find(`[data-test='${attr}']`);
};

describe('LoadingPage Component', () => {
  let component: any;
  beforeEach(() => {
    component = setup();
  });

  it('Should render a container Grid', () => {
    const containerGrid = findByTestAttribute(component, 'Souf');
    expect(containerGrid.length).toBe(1);
  });

  //   it('Should render an inner Grid', () => {
  //     const innerGrid = component.find(`[data-test='innerGrid']`);
  //     expect(innerGrid.length).toBe(1);
  //   });

  //   it('Should render a Spinner', () => {
  //     const spinner = component.find(`[data-test='spinner']`);
  //     expect(spinner.length).toBe(1);
  //   });
});
