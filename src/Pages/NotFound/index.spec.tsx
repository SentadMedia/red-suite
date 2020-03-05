import NotFound from '.';
import React from 'react';
import { shallow } from 'enzyme';

describe('NotFoundPage', () => {
  let notFound: any;

  beforeEach(() => {
    notFound = shallow(<NotFound />);
  });

  it('Should render without errors', () => {
    expect(notFound).toMatchSnapshot();
  });
});
