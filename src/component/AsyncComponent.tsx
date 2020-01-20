import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function asyncComponent(importComponent: any) {
  class AsyncComponent extends React.Component<any, { component: any }> {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }

    render() {
      const Comp = this.state.component;

      if (Comp) {
        return <Comp {...this.props} />;
      }

      return <CircularProgress />;
    }
  }

  return AsyncComponent;
}
