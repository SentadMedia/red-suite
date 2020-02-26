// import 'regenerator-runtime/runtime';
import { Environment, RecordSource, Store } from 'relay-runtime';
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-modern';

const store = new Store(new RecordSource());

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () =>
        Promise.resolve(process.env['REACT_APP_GRAPHQL_API_BASE_URL'] || '')
    }),
    next => async req => {
      req.fetchOpts.credentials = 'include';
      console.log('RelayRequest: ', req);
      const res = await next(req);
      console.log('RelayResponse: ', res);
      return res;
    }
  ],
  { noThrow: true }
);

const env = new Environment({ network, store });

export default env;
