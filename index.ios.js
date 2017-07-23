/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/configureStore'
import App from './src/app';

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App store={store} />
  </Provider>
)


AppRegistry.registerComponent('quizz', () => ReduxApp);
