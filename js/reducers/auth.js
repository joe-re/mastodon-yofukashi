// @flow

import type { ActionTypes } from '../actions';
import type { App } from '../types/App';
import type { OAuth } from '../types/OAuth';
import type { Account } from '../types/Account';

export type State = {|
  domain: string,
  app: ?App,
  oauth: ?OAuth,
  account: ?Account
|};

const createInitialState = () => ({ domain: '', app: null, oauth: null, account: null });

const timeline = (state: State = createInitialState(), action: ActionTypes): State => {
  switch (action.type) {
    case 'ENTER_DOMAIN_FULFILLED':
    case 'LOGIN_FULFILLED':
      return Object.assign(createInitialState(), state, action.payload);
    default:
      return state;
  }
};

export default timeline;
