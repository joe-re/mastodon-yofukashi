// @flow

import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component } from 'react';
import Actions from '../actions';
import PostScreen from '../components/PostScreen';
import type { ReduxState } from '../reducers';
import type { State as AuthState } from '../reducers/auth';

class PostContainer extends Component {
  props: { auth: AuthState, actions: typeof Actions, navigation: any };
  static navigationOptions = { title: 'Toot!' };

  render() {
    return <PostScreen {...this.props} />;
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
)(PostContainer);

export default container;
