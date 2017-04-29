// @flow

import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component } from 'react';
import Actions from '../actions';
import HomeTimelineScreen from '../components/HomeTimelineScreen';
import type { ReduxState } from '../reducers';
import type { State as AuthState } from '../reducers/auth';
import type { State as TimelineState } from '../reducers/timeline';

class TimelineContainer extends Component {
  props: { auth: AuthState, actions: typeof Actions, timeline: TimelineState };
  static navigationOptions = { title: 'Timeline' };

  render() {
    return <HomeTimelineScreen {...this.props} />;
  }
}

const mapStateToProps = (state: ReduxState) => ({
  nav: state.nav,
  auth: state.auth,
  timeline: state.timeline
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  actions: bindActionCreators(Actions, dispatch)
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelineContainer);

export default container;
