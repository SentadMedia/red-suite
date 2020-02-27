import { applyMiddleware, compose, createStore } from 'redux';

import { History } from 'history';
import { createRootReducer } from 'Config';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

async function configureStoreProd(history: History<any>) {
  const reactRouterMiddleware = routerMiddleware(history);
  const rootReducer = createRootReducer(history);

  const enhancers = applyMiddleware(thunkMiddleware, reactRouterMiddleware);

  const store = createStore(rootReducer, compose(enhancers));

  // store.subscribe();
  return store;
}

async function configureStoreDev(history: History<any>) {
  const reactRouterMiddleware = routerMiddleware(history);
  const rootReducer = createRootReducer(history);

  const enhancers = applyMiddleware(
    thunkMiddleware,
    reactRouterMiddleware,
    reduxImmutableStateInvariant()
  );

  const composeSetup =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose; // eslint-disable-line no-underscore-dangle

  const store = createStore(rootReducer, composeSetup(enhancers));

  // store.subscribe();

  if (module.hot) {
    module.hot.accept('./RootReducer', () => {
      const nextReducer = require('./RootReducer').default(history); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default async (history: History<any>) => {
  return process.env.NODE_ENV === 'production'
    ? await configureStoreProd(history)
    : await configureStoreDev(history);
};
