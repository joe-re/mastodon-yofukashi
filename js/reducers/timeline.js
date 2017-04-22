// @flow

export type State = {|
  data: any[]
|};

const createInitialState = () => ({ data: [] });

const timeline = (state: State = createInitialState(), action: any): State => {
  switch (action.type) {
    case 'FETCH_TIMELINE_FULFILLED':
      return Object.assign(createInitialState(), state, { data: action.payload.timeline });
    default:
      return state;
  }
};

export default timeline;
