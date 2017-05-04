// @flow

import { Button, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import { Component } from 'react';
import Actions from '../actions';
import type { State as AuthState } from '../reducers/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8
  },
  tootInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    textAlignVertical: 'top',
    padding: 8,
    borderRadius: 3
  }
});

export default class PostScreen extends Component {
  state: { toot: string };
  props: { actions: typeof Actions, auth: AuthState, navigation: any };
  constructor(props: any) {
    super(props);
    this.state = { toot: '' };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={60}>
        <TextInput
          style={styles.tootInput}
          onChangeText={(text) => {
            this.setState({ toot: text });
          }}
          value={this.state.toot}
          placeholder="What's on your mind?"
          multiline
        />
        <Button
          onPress={() =>
            this.props.actions.postToot({ status: this.state.toot, auth: this.props.auth }
          )}
          title="Toot!"
        />
      </KeyboardAvoidingView>
    );
  }
}
