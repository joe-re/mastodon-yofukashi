// @flow

import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { Component } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  view: { marginBottom: 8 },
  textInput: { width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }
});

export default class LoginScreen extends Component {
  state: { domain: string };
  constructor(props: any) {
    super(props);
    this.state = { domain: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.view} >Log into any Mastodon Instance!</Text>
        <View style={styles.view}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({ domain: text });
            }}
            value={this.state.domain}
            placeholder="mastodon.social"
          />
        </View>
        <Button
          onPress={() => this.props.actions.enterDomain({ domain: this.state.domain })}
          title="Login"
        />
      </View>
    );
  }
}
