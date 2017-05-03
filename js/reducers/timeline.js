// @flow

import type { StatusResponse, Status } from '../types/Status';
import type { ActionTypes } from '../actions';

export type State = {|
  statuses: Status[]
|};

const createInitialState = () => ({ statuses: [] });

function calucateElapsedTime(createdAt: Date): string {
  const ms = new Date().getTime() - createdAt.getTime();
  const seconds = ms / 1000;
  if (seconds < 60) {
    return `${Math.floor(seconds)}s`;
  }
  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.floor(minutes)}m`;
  }
  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}h`;
  }
  const days = hours / 24;
  if (days < 7) {
    return `${Math.floor(days)}d`;
  }
  const weeks = days / 7;
  if (weeks < 4) {
    return `${Math.floor(weeks)}w`;
  }
  const month = weeks / 4;
  return `${Math.floor(month)}m`;
}

function appendElapsedAttr(statuses: StatusResponse[]): Status[] {
  return statuses.map((v) => {
    let newStatus: any = Object.assign({}, v);
    newStatus = Object.assign(newStatus, { elapsed: calucateElapsedTime(new Date(v.created_at)) });
    if (newStatus.reblog) {
      newStatus.reblog = Object.assign({}, newStatus.reblog, {
        elapsed: calucateElapsedTime(new Date(newStatus.reblog.created_at))
      });
    }
    return newStatus;
  });
}

const timeline = (state: State = createInitialState(), action: ActionTypes): State => {
  switch (action.type) {
    case 'GET_HOME_TIMELINE_FULFILLED':
      return Object.assign(createInitialState(), state, {
        statuses: appendElapsedAttr(action.payload.timeline)
      });
    default:
      return state;
  }
};

export default timeline;
