// @flow

import deserializeJSONResponse from './deserializeJSONResponse';
import type { App } from '../types/App';
import Request from './Request';

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
