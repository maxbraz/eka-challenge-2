
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  }));
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
