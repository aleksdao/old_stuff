import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const logger = createLogger();
const router = routerMiddleware(browserHistory);


const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}


//middleware can do something between dispatching an event and touches reducer
