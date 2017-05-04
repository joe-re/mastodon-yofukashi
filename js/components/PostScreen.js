// @flow

import { StyleSheet, View, Text } from 'react-native';
import { Component } from 'react';
import Actions from '../actions';
import type { State as AuthState } from '../reducers/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  view: { marginHorizontal: 20, marginBottom: 8 },
  domainInput: { width: 300, height: 40, borderColor: 'gray', borderWidth: 1 },
  tokenInput: { width: 300, height: 100, borderColor: 'gray', borderWidth: 1 }
});

export default class PostScreen extends Component {
  state: { domain: string, authorizationCode: string };
  props: { actions: typeof Actions, auth: AuthState, navigation: any };
  constructor(props: any) {
    super(props);
    this.state = { domain: '', authorizationCode: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>hoge</Text>
      </View>
    );
  }
}
