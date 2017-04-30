// @flow

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './reducers';

const createReduxStore = (preloadedState: Object) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk, promiseMiddleware(), logger), autoRehydrate()),
  );
  persistStore(store, { storage: AsyncStorage });
  return store;
};

export default createReduxStore({});
