// @flow

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const createReduxStore = (preloadedState: Object) =>
  createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk, promiseMiddleware(), logger)),
  );

export default createReduxStore({});
