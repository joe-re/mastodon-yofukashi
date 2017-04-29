// @flow

import type { Status } from '../types/Status';
import type { ActionTypes } from '../actions';

export type State = {|
  statuses: Status[]
|};

const createInitialState = () => ({ statuses: [] });

const timeline = (state: State = createInitialState(), action: ActionTypes): State => {
  switch (action.type) {
    case 'GET_HOME_TIMELINE_FULFILLED':
      return Object.assign(createInitialState(), state, { statuses: action.payload.timeline });
    default:
      return state;
  }
};

export default timeline;
