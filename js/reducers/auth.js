// @flow

import type { ActionTypes } from '../actions';
export type State = {|
  domain: string
|};

const createInitialState = () => ({ domain: '' });

const timeline = (state: State = createInitialState(), action: ActionTypes): State => {
  switch (action.type) {
    case 'ENTER_DOMAIN_FULFILLED':
      return Object.assign(createInitialState(), state, { domain: action.payload.domain });
    default:
      return state;
  }
};

export default timeline;
