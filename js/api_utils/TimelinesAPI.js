// @flow

import deserializeJSONResponse from './deserializeJSONResponse';
import Request from './Request';
import type { StatusResponse } from '../types/Status';

function getHome(params: {
  domain: string,
  max_id?: number,
  accessToken: string
}): Promise<StatusResponse[]> {
  return deserializeJSONResponse(
    Request.get({
      url: `https://${params.domain}/api/v1/timelines/home`,
      accessToken: params.accessToken,
    })
  );
}

export default { getHome };
