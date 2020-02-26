import App, { AppProps } from './App';

import React from 'react';
import { shallow } from 'enzyme';

const setup = (
  props: AppProps = { history: null, store: null, classes: null }
) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render without errors', () => {
    console.log(component);
  });
});
