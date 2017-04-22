// @flow

import type { Dispatch } from 'redux';
import AuthAPI from './api_utils/AuthAPI';
import type { App } from './types/App';

type ENTER_DOMAIN_PAYLOAD = { payload: { domain: string, app: App } };
type ENTER_DOMAIN_ACTION = { type: 'ENTER_DOMAIN', payload: Promise<ENTER_DOMAIN_PAYLOAD> };
type ENTER_DOMAIN_FULFILLED = { type: 'ENTER_DOMAIN_FULFILLED' } & ENTER_DOMAIN_PAYLOAD;

function enterDomain(params: { domain: string }) {
  return (dispatch: Dispatch<ENTER_DOMAIN_ACTION>) => {
    const fetch = AuthAPI.createOAuthApp({ domain: params.domain }).then(
      res => ({ domain: params.domain, app: res })
    );
    dispatch({ type: 'ENTER_DOMAIN', payload: fetch });
  };
}

export type ActionTypes =
  ENTER_DOMAIN_FULFILLED;

export default {
  enterDomain
};
