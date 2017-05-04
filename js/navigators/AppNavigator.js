// @flow

import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginContainer from '../containers/LoginContainer';
import TimelineContainer from '../containers/TimelineContainer';
import PostContainer from '../containers/PostContainer';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginContainer },
  Timeline: { screen: TimelineContainer },
  Post: { screen: PostContainer }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);
