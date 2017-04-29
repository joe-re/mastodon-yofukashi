// @flow

import deserializeJSONResponse from './deserializeJSONResponse';
import Request from './Request';
import type { Status } from '../types/Status';

function getHome(params: {
  domain: string,
  max_id?: number,
  accessToken: string
}): Promise<Status[]> {
  return deserializeJSONResponse(
    Request.get({
      url: `https://${params.domain}/api/v1/timeline/home`,
      accessToken: params.accessToken,
    })
  );
}

export default { getHome };
