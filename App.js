import React, {Component} from 'react';
import AppNavigator from './src/navigators/AppNavigator';
// react-native-gesture-handler
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/store';

export default class App extends Component {
  render() {
    // 注入store
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
