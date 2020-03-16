// import 'regenerator-runtime/runtime';
import { Environment, RecordSource, Store } from 'relay-runtime';
import {
  RelayNetworkLayer,
  perfMiddleware,
  urlMiddleware
} from 'react-relay-network-modern';

const store = new Store(new RecordSource());

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () =>
        Promise.resolve(process.env['REACT_APP_GRAPHQL_API_BASE_URL'] || '')
    }),
    // process.env['NODE_ENV'] === 'development' ? loggerMiddleware() : null,
    // process.env['NODE_ENV'] === 'development' ? errorMiddleware() : null,
    process.env['NODE_ENV'] === 'development' ? perfMiddleware() : null,
    next => async req => {
      req.fetchOpts.credentials = 'include';
      return await next(req);
    }
  ],
  { noThrow: false }
);

const env = new Environment({ network, store });

export default env;
