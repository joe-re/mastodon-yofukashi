// @flow

import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { Component } from 'react';
import Actions from '../actions';
import type { State as NavState } from '../reducers/nav';
import type { State as AuthState } from '../reducers/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  view: { marginHorizontal: 20, marginBottom: 8 },
  domainInput: { width: 300, height: 40, borderColor: 'gray', borderWidth: 1 },
  tokenInput: { width: 300, height: 100, borderColor: 'gray', borderWidth: 1 }
});

export default class LoginScreen extends Component {
  state: { domain: string, authorizationCode: string };
  props: { actions: typeof Actions, auth: AuthState, navigation: any };
  constructor(props: any) {
    super(props);
    this.state = { domain: '', authorizationCode: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.view} >
          First, input any Mastodon Instance and open authorization link.
        </Text>
        <View style={styles.view}>
          <TextInput
            style={styles.domainInput}
            onChangeText={(text) => {
              this.setState({ domain: text });
            }}
            value={this.state.domain}
            placeholder="mastodon.social"
          />
        </View>
        <Button
          onPress={() => this.props.actions.openAuthorizationLink({ domain: this.state.domain })}
          title="Open Autorization Link"
        />
        <Text>Second, copy and paste shown authorization code and put login button.</Text>
        <View style={styles.view}>
          <TextInput
            style={styles.tokenInput}
            onChangeText={(text) => {
              this.setState({ authorizationCode: text });
            }}
            value={this.state.authorizationCode}
          />
        </View>
        <Button
          onPress={() => this.props.actions.login({
            authorizationCode: this.state.authorizationCode,
            auth: this.props.auth,
            cb: () => this.props.navigation.navigate('Timeline')
          })}
          title="Login"
        />
      </View>
    );
  }
}
