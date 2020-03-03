import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient';
import Banner from './Banner'
import Menu from './Menu'
import GoodsList from './GoodsList';

const THEME_COLOR = '#678'
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
  getBanner() {
    return <View style={styles.banner_container}>
      <Image
        style={styles.banner}
        source={require('./Demo/img/2.jpg')}
        resizeMode='cover'
      />
    </View>
  }
  // todo
  getMsgList() {
    let msgList = [
      '世界八大名酒，你都喝了吗',
      '创奇鼠标升级！雷蛇M7890',
      '饮料千千万，戒不掉的肥宅快乐水',
    ]
    return (
      <View>

      </View>
    )
  }
  render() {
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content',
    }
    let navigationBar = <NavigationBar
      statusBar={statusBar}
      renderLeftContent={this.getLeftButton()}
      renderRightButton={this.getRightButton()}
      searchInput={this.getSearchInput()}
      style={{ backgroundColor: THEME_COLOR }}
    />
    return (
      <ScrollView style={styles.container}>
        {navigationBar}
        <Banner />
        <Menu />
        {this.getBanner()}
        <GoodsList />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsList />
      </ScrollView>
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
    // flex: 1,
    backgroundColor: '#e5e5e5',
  },
  inputContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  TextInput: {
    fontSize: 13,
    color: '#e5e5e5',
    height: 34,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 14,
    padding: 0,
    paddingLeft: 34,
    paddingRight: 10,
    backgroundColor: 'white',
    zIndex: -999,
  },
  search: {
    color: '#bbb',
    position: 'absolute',
    top: 6,
    left: 8,
    zIndex: 999
  },
  tabStyle: {
    fontSize: 24,
    fontWeight: "bold"

  },
  barStyle: {
    backgroundColor: THEME_COLOR
  },
  labelStyle: {
    fontSize: 15,
    margin: 0,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white',
    position: 'absolute',
    // left: 10
  },
  indicatorContainer: {
    alignItems: 'center'
  },
   // banner
   banner_container: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  banner: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  }
})