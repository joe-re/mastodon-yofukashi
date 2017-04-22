// @flow

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './js/app';

window.React = React;

AppRegistry.registerComponent('MastodonYofukashi', () => App);
