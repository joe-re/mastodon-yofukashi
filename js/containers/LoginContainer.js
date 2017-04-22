// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import LoginScreen from '../components/LoginScreen';
import type { Dispatch } from 'redux';

const LoginContainer = (props: any) => (
  <LoginScreen {...props} />
);

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
