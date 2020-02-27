import React, { Component } from 'react'
import {
  StyleSheet
} from 'react-native'
import { TabNavigator } from '../navigators/TabNavigator'


export default class Index extends Component {
  renderTabs() {
    return TabNavigator
  }

  render() {
    const Tabs = this.renderTabs()
    return (
      <Tabs />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabIcon: {
    width: 26,
    height: 26
  }
})