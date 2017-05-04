// @flow

import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Actions from '../actions';
import HomeTimelineScreen from '../components/HomeTimelineScreen';
import type { ReduxState } from '../reducers';
import type { State as AuthState } from '../reducers/auth';
import type { State as TimelineState } from '../reducers/timeline';

class TimelineContainer extends React.Component {
  props: { auth: AuthState, actions: typeof Actions, timeline: TimelineState, navigation: any };
  static navigationOptions = props => ({
    title: 'Timeline',
    headerRight: (
      <Icon
        name="pencil-square-o"
        style={{ marginRight: 8 }}
        size={28}
        onPress={() => props.navigation.navigate('Post')}
      />
    )
  });

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
