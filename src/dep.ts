import { History } from 'history';
import { UIFactory } from './component/UIFactory';
import configureStore from './component/Store';
import { createBrowserHistory } from 'history';

export function initReduxStore(history: History<any>) {
  return configureStore(history);
}

export function initUIFactory(): UIFactory {
  const browserHistory = createBrowserHistory();
  const reduxStore = configureStore(browserHistory);

  return new UIFactory(browserHistory, reduxStore);
}
