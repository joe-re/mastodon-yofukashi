// @flow

import deserializeJSONResponse from './deserializeJSONResponse';
import Request from './Request';
import type { App } from '../types/App';

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

export default { createOAuthApp };
