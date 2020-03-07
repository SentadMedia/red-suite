import 'typeface-roboto';

import * as serviceWorker from './serviceWorker';

import App from 'App';
import { LoadingPage } from 'Pages/LoadingPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from 'UI';
import { configureStore } from 'Config';
import { createBrowserHistory } from 'history';

ReactDOM.render(<LoadingPage theme={Theme} />, document.getElementById('root'));

async function initUIFactory(): Promise<any> {
  let browserHistory;
  try {
    browserHistory = createBrowserHistory();
  } catch (e) {
    console.error("Can't create a BrowserHistory object", e);
    throw e;
  }

  let reduxStore;
  try {
    reduxStore = await configureStore(browserHistory);
  } catch (e) {
    console.error("Can't create a reduxStore object", e);
    throw e;
  }

  return <App history={browserHistory} store={reduxStore} />;
}

initUIFactory()
  .then(app => {
    if (!!app) {
      ReactDOM.render(app, document.getElementById('root'));
    } else {
      ReactDOM.render(
        <div>Unexpected Error</div>, // TODO custom error page
        document.getElementById('root')
      );
    }
  })
  .catch(error => {
    console.error(error);
    ReactDOM.render(
      <div>Unexpected Error</div>, // TODO custom error page
      document.getElementById('root')
    );
  });

serviceWorker.unregister();
