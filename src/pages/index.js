import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import TabNavigator from '../navigators/TabNavigator';
import NavigationUtils from '../navigators/NavigationUtils';

export default class Index extends Component {
  render() {
    // Fix TabNavigator导航页无法跳转到外部页面
    NavigationUtils.navigation = this.props.navigation;
    return <TabNavigator />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 26,
    height: 26,
  },
});
