import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  DeviceInfo,
} from 'react-native';
import { theme } from '../constants'
import { Block, Text } from '../components'

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
    return <Block>{ele ? ele : null}</Block>;
  }
  render () {
    let statusBar = !this.props.statusBar.hidden ? (
      <View style={styles.statusBar}>
        <StatusBar
          {...this.props.statusBar}
        />
      </View>
    ) : null;

    let centerContent = this.props.searchInput ? (
      this.props.searchInput
    ) : (
        <Text center ellipsizeMode="head" numberOfLines={1} style={[styles.title, this.props.titleStyle]}>
          {this.props.title}
        </Text>
      );

    let navBar = !this.props.hide ? (
      <Block row center ref={this.props.barRef} style={[styles.navBar, this.props.style]}>
        {this.getButtonElement(this.props.leftContent)}
        <Block block style={[this.props.contentStyle]}>
          {centerContent}
        </Block>
        <Block >
          {/* 占位居中 */}
          <Block style={{width: theme.SIZES.base * 1.5 }}></Block>
          {this.getButtonElement(this.props.rightContent)}
        </Block>
      </Block>
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
    paddingHorizontal: theme.SIZES.base,
    height: 40,
    elevation: 999, // andriod设置层级
  },
  title: {
    fontSize: theme.SIZES.header,
    color: theme.COLORS.black,
  },
  statusBar: {
    height: ANDROID_STATUBAR_HEIGHT,
  },
});
