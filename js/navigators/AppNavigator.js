// @flow

import React from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

export default connect(state => ({ nav: state.nav }))(AppWithNavigationState);
