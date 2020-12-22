import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  DeviceInfo,
} from 'react-native';

const ANDROID_STATUBAR_HEIGHT = StatusBar.currentHeight;
// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    statusBar: {
      style: 'light-content',
      hidden: false,
    },
  };
  static propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleStyle: ViewPropTypes.style,
    hide: PropTypes.bool,
    statusBar: PropTypes.shape({
      barStyle: PropTypes.oneOf(['light-content', 'dark-content', 'default']),
      hidden: PropTypes.bool,
      backgroundColor: PropTypes.string,
    }),
    rightContent: PropTypes.element,
    searchInput: PropTypes.element,
    leftContent: PropTypes.element,
  };

  getButtonElement (ele) {
    return <View style={styles.navButton}>{ele ? ele : null}</View>;
  }
  render () {
    let statusBar = !this.props.statusBar.hidden ? (
      <View style={styles.statusBar}>
        <StatusBar
          {...this.props.statusBar}
          translucent
        />
      </View>
    ) : null;

    let centerContent = this.props.searchInput ? (
      this.props.searchInput
    ) : (
        <Text ellipsizeMode="head" numberOfLines={1} style={[styles.title, this.props.titleStyle]}>
          {this.props.title}
        </Text>
      );

    let navBar = !this.props.hide ? (
      <View ref={this.props.barRef} style={[styles.navBar, this.props.style]}>
        {this.getButtonElement(this.props.leftContent)}
        <View style={[styles.navContent, this.props.contentStyle]}>
          {centerContent}
        </View>
        {this.getButtonElement(this.props.rightContent)}
      </View>
    ) : null;

    return (
      <View style={this.props.style}>
        {statusBar}
        {navBar}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    elevation: 999, // andriod设置层级
  },
  navContent: {
    flex: 1,
  },
  navButton: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  statusBar: {
    height: ANDROID_STATUBAR_HEIGHT,
  },
});
