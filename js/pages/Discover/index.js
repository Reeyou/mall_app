import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient';

const THEME_COLOR = '#ffa631'
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
    return <View>
      <EvilIcons
        name={"search"}
        size={26}
        style={{ color: 'white', position: 'absolute', top: 6, left: 2 }}
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={() => this.onChangeText()}
        placeholder={'搜索商家或商品名称'}
        placeholderTextColor={'#e5e5e5'}
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
      renderRightButton={this.getRightButton()}
      searchInput={this.getSearchInput()}
      style={{ backgroundColor: THEME_COLOR }}
    />
    return (
      <View style={styles.container}>
        {navigationBar}
        <Text>Category</Text>
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
  }
})