// @flow

import { combineReducers } from 'redux';
import nav from './nav';
import timeline from './timeline';
import auth from './auth';
import type { State as NavState } from './nav';
import type { State as TimelineState } from './timeline';
import type { State as AuthState } from './timeline';

export type ReduxState = {
  nav: NavState,
  timeline: TimelineState,
  auth: AuthState
};

const reducers = combineReducers({
  nav,
  timeline,
  auth
});

export default reducers;
