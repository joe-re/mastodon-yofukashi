// @flow

import deserializeJSONResponse from './deserializeJSONResponse';
import Request from './Request';
import type { StatusResponse } from '../types/Status';

function create(params: {
  status: string,
  accessToken: string,
  domain: string
}): Promise<StatusResponse> {
  return deserializeJSONResponse(
    Request.post({
      url: `https://${params.domain}/api/v1/statuses`,
      accessToken: params.accessToken,
      parameters: { status: params.status }
    })
  );
}

export default { create };
