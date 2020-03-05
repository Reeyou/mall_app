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
          // {...this.props.statusBar}
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
          <View style={[styles.navBar,this.props.style]}>
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
        // <LinearGradient
        // start={{ x : 0, y : 1 }}
        // end={{ x : 1, y : 1 }}
        // colors={[ '#FF9100', '#FF6500' ]}
        // >
        //   {statusBar}
        //   {navBar}
        // </LinearGradient>
        <View style={this.props.style}>
          {statusBar}
          {navBar}
        </View>
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
    height: 50,
    elevation: 999, // andriod设置层级
  },
  navContent: {
    flex: 1,
    // marginRight: 10,
    // marginLeft: 10
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