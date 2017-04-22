// @flow

import type { Dispatch } from 'redux';
import { Linking } from 'react-native';
import { buildQueryURL } from './api_utils/Request';
import AuthAPI from './api_utils/AuthAPI';
import AccountsAPI from './api_utils/AccountsAPI';
import type { App } from './types/App';
import type { Account } from './types/Account';
import type { OAuth } from './types/OAuth';
import type { State as AuthState } from './reducers/auth';

type ENTER_DOMAIN_PAYLOAD = { payload: { domain: string, app: App } };
type ENTER_DOMAIN_ACTION = { type: 'ENTER_DOMAIN', payload: Promise<ENTER_DOMAIN_PAYLOAD> };
type ENTER_DOMAIN_FULFILLED = { type: 'ENTER_DOMAIN_FULFILLED' } & ENTER_DOMAIN_PAYLOAD;

function openAuthorizationLink(params: { domain: string }) {
  return (dispatch: Dispatch<ENTER_DOMAIN_ACTION>) => {
    const fetch = AuthAPI.createOAuthApp({ domain: params.domain }).then((res) => {
      const requestURL = buildQueryURL({
        url: `https://${params.domain}/oauth/authorize`,
        parameters: {
          redirect_uri: res.redirect_uri,
          response_type: 'code',
          client_id: res.client_id,
          scope: 'read write follow'
        }
      });
      return Linking.openURL(requestURL).then(() => ({ domain: params.domain, app: res }));
    });
    dispatch({ type: 'ENTER_DOMAIN', payload: fetch });
  };
}

type LOGIN_PAYLOAD = { payload: { account: Account, oauth: OAuth } };
type LOGIN_ACTION = { type: 'LOGIN', payload: Promise<LOGIN_PAYLOAD> };
type LOGIN_FULFILLED = { type: 'LOGIN_FULFILLED' } & LOGIN_PAYLOAD;
function login(params: { auth: AuthState, authorizationCode: string }) {
  return (dispatch: Dispatch<LOGIN_ACTION>) => {
    const fetch = AuthAPI.getAccessToken(params).then(oauth =>
      AccountsAPI.verifyCredential({
        domain: params.auth.domain, accessToken: oauth.access_token
      }).then(account => ({ oauth, account })));
    dispatch({ type: 'LOGIN', payload: fetch });
  };
}

export type ActionTypes =
  ENTER_DOMAIN_FULFILLED |
  LOGIN_FULFILLED;

export default {
  openAuthorizationLink,
  login
};
