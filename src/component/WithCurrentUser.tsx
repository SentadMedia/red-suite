import React from 'react';
import { Subtract } from 'utility-types';

interface currentUserProps {
  currentUser: any;
}

export default function withCurrentUser<T extends currentUserProps>(
  Component: React.ComponentType<T>
) {
  return class extends React.Component<Subtract<T, currentUserProps>> {
    render() {
      return <Component {...(this.props as T)} currentUser={{}} />;
    }
  };
}
