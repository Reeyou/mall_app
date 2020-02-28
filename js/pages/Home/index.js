import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NavigationBar from '../../component/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient';
import ScrollTab from './ScrollTab'

const THEME_COLOR = '#ffa631'
const LOCATION = '上海市'
const TABS = ['推荐', '手机专区', '服饰专区', '母婴专区', '电脑专区', '拼团专区']
export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  getLeftButton() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <Text
        style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}
      >上海市</Text>
      <EvilIcons
        name={"chevron-down"}
        size={26}
        style={{ color: 'white' }}
      />
    </TouchableOpacity>
  }
  getRightButton() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <Ionicons
        name={'ios-qr-scanner'}
        size={26}
        style={{ color: 'white', marginRight: 10 }}
      />

      <AntDesign
        name={'message1'}
        size={26}
        style={{ color: 'white' }}
      />
    </TouchableOpacity>
  }
  getSearchInput() {
    return <View style={styles.inputContainer}>
      <EvilIcons
        name={"search"}
        size={26}
        style={styles.search}
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={() => this.onChangeText()}
        placeholder={'搜索商家或商品名称'}
        placeholderTextColor={'#bbb'}
      />
    </View>
  }
  onChangeText() {

  }
  getTabs() {
    const tabs = {}
    TABS.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <ScrollTab {...props} tabLable={item} />,
        navigationOptions: {
          title: item
        }
      }
    })
    return tabs
  }
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(
        this.getTabs(),
        {
          tabBarOptions: {
            tabStyle: styles.tabStyle,
            upperCaseLabel: false,
            scrollEnabled: true,
            style: styles.barStyle,
            indicatorStyle: styles.indicatorStyle,
            labelStyle: styles.labelStyle
          }
        }
      )
    )
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content',
      // hidden: true
    }
    let navigationBar = <NavigationBar
      statusBar={statusBar}
      renderLeftContent={this.getLeftButton()}
      renderRightButton={this.getRightButton()}
      searchInput={this.getSearchInput()}
      style={{ backgroundColor: THEME_COLOR }}
    />
    return (
      <View style={styles.container}>
        {navigationBar}
        {TabNavigator && <TabNavigator />}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  TextInput: {
    fontSize: 13,
    color: '#e5e5e5',
    height: 34,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 0,
    paddingLeft: 26,
    paddingRight: 10,
    backgroundColor: 'white'
  },
  search: {
    color: '#bbb',
    position: 'absolute',
    top: 6,
    left: 2,
    zIndex: 99
  },
  tabStyle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold"

  },
  barStyle: {
    height: 50,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: THEME_COLOR
  },
  labelStyle: {
    fontSize: 13,
    margin: 0,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
    position: 'absolute',
    left: 10
  },
  indicatorContainer: {
    alignItems: 'center'
  }
})