import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient';
import Banner from '../../component/Banner'
import Menu from '../Home/Menu'

const THEME_COLOR = 'white'
export default class Discover extends Component {
  constructor(props) {
    super(props)
  }
  getLeftContent() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <Text
        style={styles.title}
      >发现</Text>
    </TouchableOpacity>
  }
  getRightButton() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <AntDesign
        name={'message1'}
        size={26}
        style={{ color: '#000' }}
      />
    </TouchableOpacity>
  }
  _renderContent() {
    return (
      <View style={styles.content}>
        <View style={styles.label_container}>
          <Text style={styles.label}>商城头条</Text>
        </View>
      </View>
    )
  }
  _renderItem() {
    return (
      <TouchableOpacity>
        <View style={styles.item_container}>
          <Image
            style={styles.item_banner}
            source={require('../Home/Demo/img/2.jpg')}
            resizeMode='cover'
          />
          <View style={styles.item_detail}>
            <Text style={styles.title}>【互动赢好礼】女神节，活出最美的姿态</Text>
            <Text style={styles.sub_title}>参与互动话题赢取华为商城联合全棉时代守护女神礼盒</Text>
            <View style={styles.item_footer}>
              <Text style={styles.time}>2019-02-29</Text>
              <Text style={styles.read_count}>64295 阅读</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    let statusBar = {
      backgroundColor: 'white',
      barStyle: 'light-content',
    }
    let navigationBar = <NavigationBar
      statusBar={statusBar}
      renderLeftContent={this.getLeftContent()}
      renderRightButton={this.getRightButton()}
      style={{ backgroundColor: THEME_COLOR }}
    />
    return (
      <View style={styles.container}>
        {navigationBar}
        <ScrollView style={styles.discover_banner}>
          <Banner />
          <Menu />
          {this._renderContent()}
          {this._renderItem()}
          {this._renderItem()}
          {this._renderItem()}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
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
  },
  content: {
    paddingLeft: 10,
    marginRight: 10
  },
  label_container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  item_container: {
    flexDirection: 'column',
    borderRadius: 10,
    marginBottom: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  item_banner: {
    width: '100%',
    height: 200,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  item_detail: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  title: {
    fontSize: 16,
    marginTop: 8,
  },
  sub_title: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 2,
    marginBottom: 2
  },
  item_footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  time: {
    fontSize: 12,
    color: '#aaa'
  },
  read_count: {
    fontSize: 12,
    color: '#aaa'
  }
})