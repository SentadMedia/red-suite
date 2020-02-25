import 'typeface-roboto';

import React, { ReactElement } from 'react';

import App from './App';
import { History } from 'history';

export class UIFactory {
  constructor(private history: History<any>, private store: any) {}

  public createApp(): ReactElement {
    return <App history={this.history} store={this.store} />;
  }
}
