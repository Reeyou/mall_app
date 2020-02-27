import React,{Component} from 'react'
import AppNavigator from './js/navigators/AppNavigator'
// react-native-gesture-handler
import 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
        <AppNavigator />
    )
  }
}