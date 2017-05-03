// @flow

import type { Account } from './Account';

export type StatusResponse = {
  id: number,
  uri: string,
  url: string,
  account: Account,
  in_reply_to_id: ?number,
  in_reply_to_account_id: ?number,
  reblog: StatusResponse,
  content: string,
  created_at: string,
  reblogs_count: number,
  favourites_count: number,
  reblogged: boolean,
  favourited: boolean,
  sensitive: boolean,
  spoiler_text: ?string,
  visibility: 'public' | 'unlisted' | 'private' | 'direct',
  media_attachments: Object[],
  mentions: Object[],
  tags: Object[],
  application: Object
}

/*
Hmmm...can not work this...
maybe, it is related to https://github.com/facebook/flow/issues/2969
*/
// export type Status = { elaspsed: string } & StatusResponse;

export type Status = {
  id: number,
  uri: string,
  url: string,
  account: Account,
  in_reply_to_id: ?number,
  in_reply_to_account_id: ?number,
  reblog: Status,
  content: string,
  created_at: string,
  reblogs_count: number,
  favourites_count: number,
  reblogged: boolean,
  favourited: boolean,
  sensitive: boolean,
  spoiler_text: ?string,
  visibility: 'public' | 'unlisted' | 'private' | 'direct',
  media_attachments: Object[],
  mentions: Object[],
  tags: Object[],
  application: Object,
  elaspsed: string
}
