/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Timeline from './js/components/Timeline';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
window.React = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default class MastodonYofukashi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timeline />
      </View>
    );
  }
}

AppRegistry.registerComponent('MastodonYofukashi', () => MastodonYofukashi);
