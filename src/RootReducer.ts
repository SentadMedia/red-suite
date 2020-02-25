import { History } from 'history';
import appReducer from './state/appReducer';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer
  });

export default createRootReducer;
