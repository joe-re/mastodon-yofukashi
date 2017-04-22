// @flow

import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginContainer from '../containers/LoginContainer';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginContainer }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);
