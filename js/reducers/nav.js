// @flow

import { AppNavigator } from '../navigators/AppNavigator';
import type { ActionTypes } from '../actions';

export type State = {
  index: number,
  routes: { key: string, routeName: string }[]
};

const initialNavState: State = {
  index: 0,
  routes: [{ key: 'InitA', routeName: 'Login' }]
};

const nav = (state: State=initialNavState, action: ActionTypes) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default nav;
