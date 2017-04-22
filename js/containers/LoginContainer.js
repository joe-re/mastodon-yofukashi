// @flow

import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component } from 'react';
import * as Actions from '../actions';
import LoginScreen from '../components/LoginScreen';

class LoginContainer extends Component {
  static navigationOptions = { title: 'Log In' };

  render() {
    return <LoginScreen {...this.props} />;
  }
}

const mapStateToProps = (state: any) => ({
  nav: state.nav
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  actions: bindActionCreators(Actions, dispatch)
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);

export default container;
