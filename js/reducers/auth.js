// @flow

import type { ActionTypes } from '../actions';
import type { App } from '../types/App';

export type State = {| domain: string, app: ?App |};

const createInitialState = () => ({ domain: '', app: null });

const timeline = (state: State = createInitialState(), action: ActionTypes): State => {
  switch (action.type) {
    case 'ENTER_DOMAIN_FULFILLED':
      return Object.assign(createInitialState(), state, { domain: action.payload.domain });
    default:
      return state;
  }
};

export default timeline;
