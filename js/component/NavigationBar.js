import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ViewPropTypes,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Platform,
  DeviceInfo
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
  }
  // 默认属性
  static defaultProps = {
    statusBar: {
      style: 'light-content',
      hidden: false
    }
  }
  static propTypes = {
    style: ViewPropTypes.style, // navBar样式
    title: PropTypes.string,
    titleStyle: ViewPropTypes.style,
    hide: PropTypes.bool,
    statusBar: PropTypes.shape({
      barStyle: PropTypes.oneOf(['light-content', 'default']),
      hidden: PropTypes.bool,
      backgroundColor: PropTypes.string
    }),
    rightButton: PropTypes.element,
    searchInput: PropTypes.element,
    leftButton: PropTypes.element
  }
  // 获取按钮元素
  getButtonElement(ele) {
    return <View style={styles.navButton}>
      {ele ? ele : null}
    </View>
  }
  render() {
    // 状态栏
    let statusBar = !this.props.statusBar.hidden ?
      <View style={styles.statusBar}>
        <StatusBar 
          backgroundColor='transparent'
          translucent //设置状态栏是否为透明
          barStyle={'dark-content'}
        />
      </View> : null

    // 内容为搜索框则显示否则为title 
    let content = this.props.searchInput ? this.props.searchInput :
      <Text ellipsizeMode="head" numberOfLines={1} style={styles.title}>{this.props.title}</Text>

    // 导航栏内容
    let navBar = !this.props.hide ?
        <View>
          <View style={styles.navBar}>
            {/* 获取左侧按钮 */}
            {this.getButtonElement(this.props.renderLeftContent)}
            {/* 获取中间区域内容 */}
            <View style={[styles.navContent, this.props.contentStyle]}>
              {content}
            </View>
            {/* 获取右侧按钮 */}
            {this.getButtonElement(this.props.renderRightButton)}
          </View>
        </View> : null

    return (
        <LinearGradient
        // fa8c35 橙色
        // ff8936 橘黄
        // ffa400 橙黄
        // ffa631 杏黄
        // ff7500
        // ffab87
        // #ff4e47
          start={{ x: 0.56, y: 0 }}
          // locations={[0,1]}
          colors={['#ff4e47', '#ffab87']}
        >
          {statusBar}
          {navBar}
        </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red'
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    height: 50
  },
  navContent: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  },
  navButton: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  statusBar: {
    height: 20
  }
})