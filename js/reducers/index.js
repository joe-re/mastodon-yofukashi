// @flow

import { combineReducers } from 'redux';
import nav from './nav';
import timeline from './timeline';

const reducers = combineReducers({
  nav,
  timeline
});

export default reducers;
