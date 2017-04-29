// @flow

import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component } from 'react';
import Actions from '../actions';
import LoginScreen from '../components/LoginScreen';
import type { ReduxState } from '../reducers';
import type { State as AuthState } from '../reducers/auth';

class LoginContainer extends Component {
  props: { auth: AuthState, actions: typeof Actions, navigation: any };
  static navigationOptions = { title: 'Login' };

  render() {
    return <LoginScreen {...this.props} />;
  }
}

const mapStateToProps = (state: ReduxState) => ({
  nav: state.nav,
  auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  actions: bindActionCreators(Actions, dispatch)
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);

export default container;
