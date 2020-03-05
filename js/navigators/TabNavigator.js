import React,{Component} from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Discover from '../pages/Discover'
import ShopCart from '../pages/ShopCart'
import User from '../pages/User'

const TABS =
{
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? require(`../assets/tabBar/home.png`) : require(`../assets/tabBar/home-off.png`)}
          style={styles.tabIcon}
        />
      )
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      tabBarLabel: '分类',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? require(`../assets/tabBar/category.png`) : require(`../assets/tabBar/category-off.png`)}
          style={styles.tabIcon}
        />
      )
    }
  },
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? require(`../assets/tabBar/information.png`) : require(`../assets/tabBar/information-off.png`)}
          style={styles.tabIcon}
        />
      )
    }
  },
  ShopCart: {
    screen: ShopCart,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? require(`../assets/tabBar/cart.png`) : require(`../assets/tabBar/cart-off.png`)}
          style={styles.tabIcon}
        />
      )
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? require(`../assets/tabBar/user.png`) : require(`../assets/tabBar/user-off.png`)}
          style={styles.tabIcon}
        />
      )
    }
  }
}
export default class TabNavigators extends Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = true // 关闭黄色警告框
  }

  renderTabNavigator() {
    if (this.Tabs) {
      return this.Tabs
    }
    return this.Tabs = createAppContainer(
      createBottomTabNavigator(
        TABS,
        {
          tabBarOptions: {
            activeTintColor: '#ff461f',
            labelStyle: {
              fontSize: 10
            }
          },
          tabBarComponent: props => {
            return <TabBarComponent {...props} />
          }
        }
      )
    )
  }
  render() {
    const TAB = this.renderTabNavigator()
    return <TAB />
  }
}
class TabBarComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <BottomTabBar
      {...this.props}
    />
  }
}
const styles = StyleSheet.create({
  tabIcon: {
    width: 26,
    height: 26
  }
})