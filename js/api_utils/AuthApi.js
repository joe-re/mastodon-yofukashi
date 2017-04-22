// @flow

import deserializeJSONResponse from './deserializeJSONResponse';
import Request from './Request';
import type { App } from '../types/App';
import type { OAuth } from '../types/OAuth';
import type { State as AuthState } from '../reducers/auth';

function createOAuthApp(params: { domain: string }): Promise<App> {
  return deserializeJSONResponse(
    Request.post({
      url: `https://${params.domain}/api/v1/apps`,
      parameters: {
        client_name: 'yofukashi',
        redirect_uris: 'urn:ietf:wg:oauth:2.0:oob',
        scopes: 'read write follow'
      }
    })
  );
}

function getAccessToken(params: { auth: AuthState, authorizationCode: string }): Promise<OAuth> {
  const { app } = params.auth;
  if (!app) {
    return Promise.reject();
  }
  console.log(params);
  return deserializeJSONResponse(
    Request.post({
      url: `https://${params.auth.domain}/oauth/token`,
      parameters: {
        grant_type: 'authorization_code',
        code: params.authorizationCode,
        client_id: app.client_id,
        client_secret: app.client_secret,
        redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
      }
    })
  );
}

export default { createOAuthApp, getAccessToken };
