import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient';
import Request from '../../utils/Request'

const THEME_COLOR = '#ffa631'
export default class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showText: ''
    }
    this.Request = new Request()
  }
  loadData() {
    // http://api.github.com/search/repositories?q=java
    let url = 'http://192.168.0.102:3000/admin/getCategoryList'
    this.Request.fetchData(url)
    .then(data => {
      let showData = `初次加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`
      this.setState({
        showText: showData
      })
    })
    .catch(e => {
      this.setState({
        showText: e.toString()
      })
    })
  }
  getLeftContent() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <Text
        style={styles.title}
      >分类</Text>
    </TouchableOpacity>
  }
  getSearchInput() {
    return <View style={styles.inputContainer}>
      <EvilIcons
        name={"search"}
        size={26}
        style={{ color: 'white', position: 'absolute', top: 6, left: 4 }}
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={() => this.onChangeText()}
        placeholder={'搜索商家或商品名称'}
        placeholderTextColor={'#fff'}
      />
    </View>
  }
  render() {
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content',
      // hidden: true
    }
    let navigationBar = <NavigationBar
      statusBar={statusBar}
      renderLeftContent={this.getLeftContent()}
      searchInput={this.getSearchInput()}
      style={{ backgroundColor: THEME_COLOR }}
    />
    return (
      <View style={styles.container}>
        {navigationBar}
        <Text>Category</Text>
        <View style={styles.input_container}>
          <Button title='获取' onPress={() => {this.loadData()}}/>
        </View>
        <Text>{this.state.showText}</Text>
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
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10
  },
  inputContainer: {
    marginLeft: 10,
    // marginRight: 10
  },
  TextInput: {
    fontSize: 13,
    color: '#ddd',
    height: 34,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    padding: 0,
    paddingLeft: 30,
    paddingRight: 10,
    backgroundColor: '#e1e1e1'
  },
  tabStyle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold"

  },
  barStyle: {
    height: 50,
    paddingRight: 18,
    paddingLeft: 18,
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