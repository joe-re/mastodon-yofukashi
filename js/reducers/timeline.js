// @flow

import type { Status } from '../types/Status';

export type State = {|
  statuses: Status[]
|};

const createInitialState = () => ({ statuses: [] });

const timeline = (state: State = createInitialState(), action: any): State => {
  switch (action.type) {
    case 'FETCH_TIMELINE_FULFILLED':
      return Object.assign(createInitialState(), state, { statuses: action.payload.timeline });
    default:
      return state;
  }
};

export default timeline;
