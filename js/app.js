// @flow

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigatorContainer from './navigators/AppNavigator';


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigatorContainer />
    </Provider>
  );
}
