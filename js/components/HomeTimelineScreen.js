// @flow

import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Actions from '../actions';
import type { State as AuthState } from '../reducers/auth';
import type { State as TimelineState } from '../reducers/timeline';
import Timeline from './Timeline';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

type Props = { actions: typeof Actions, auth: AuthState, timeline: TimelineState };
export default class HomeTimelineScreen extends Component {
  state: {};
  props: Props;

  componentDidMount() {
    this.props.actions.getHomeTimeline({ auth: this.props.auth });
  }
  render() {
    return (
      <View style={styles.container}>
        <Timeline
          statuses={this.props.timeline.statuses}
          actions={this.props.actions}
        />
      </View>
    );
  }
}
