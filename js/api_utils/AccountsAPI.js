// @flow

import deserializeJSONResponse from './deserializeJSONResponse';
import Request from './Request';
import type { Account } from '../types/Account';

function verifyCredential(params: { domain: string, accessToken: string }): Promise<Account> {
  return deserializeJSONResponse(
    Request.get({
      url: `https://${params.domain}/api/v1/accounts/verify_credentials`,
      accessToken: params.accessToken,
    })
  );
}

export default { verifyCredential };
