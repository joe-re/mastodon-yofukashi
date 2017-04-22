// @flow

export type State = {|
  timeline: []
|};

const createInitialState = () => ({ timeline: [] });

const timeline = (state: State = createInitialState(), action: any): State => {
  switch (action.type) {
    case 'FETCH_TIMELINE_FULFILLED':
      return Object.assign(createInitialState(), state, { timeline: action.payload.timeline });
    default:
      return state;
  }
};

export default timeline;
