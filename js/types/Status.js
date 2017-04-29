// @flow

import type { Account } from './Account';

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
  application: Object
}
