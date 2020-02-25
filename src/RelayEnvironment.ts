// import 'regenerator-runtime/runtime';
import { Environment, RecordSource, Store } from 'relay-runtime';
import {
  RelayNetworkLayer,
  urlMiddleware
} from 'react-relay-network-modern/es';

const store = new Store(new RecordSource());

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () => Promise.resolve('http://localhost:8080/query')
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
