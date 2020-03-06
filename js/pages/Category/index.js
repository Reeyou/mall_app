import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  StatusBar,
  Image,
  View,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  SectionList,
  Dimensions
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Request from '../../utils/Request'

const ANDROID_STATUBAR_HEIGHT = StatusBar.currentHeight
const THEME_COLOR = 'white'
const CITY_NAMES = [
  [
    { data: [{ label: '日本馆' }, { label: '韩国馆' }, { label: '美国馆' }], title: "特色管区" },
    { data: [{ label: '婴儿奶粉' }, { label: '婴儿尿裤' }, { label: '婴儿服饰' }, { label: '婴儿洗护' }, { label: '婴儿营养' }], title: "母婴玩具" },
    { data: [{ label: '面膜' }, { label: '面部精华' }, { label: '洁面' }, { label: '防嗮' }, { label: '口红' }, { label: '香水' }], title: "美妆护肤" }
  ],
  [
    { data: [{ label: '日本' }, { label: '韩国' }, { label: '美国' }], title: "特色管区" },
    { data: [{ label: '婴儿奶粉' }, { label: '婴儿尿裤' }, { label: '婴儿服饰' }, { label: '婴儿洗护' }, { label: '婴儿营养' }], title: "母婴玩具" },
    { data: [{ label: '面膜' }, { label: '面部精华' }, { label: '洁面' }, { label: '防嗮' }, { label: '口红' }, { label: '香水' }], title: "美妆护肤" }
  ]
];
export default class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataArray: CITY_NAMES,
      isLoading: false,
      showText: '',
      activeIndex: 0
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
    return <TouchableWithoutFeedback
      style={{ flexDirection: 'row' }}
    >
      <Text
        style={styles.title}
      >分类</Text>
    </TouchableWithoutFeedback>
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
  onClick(index) {
    console.log(index)
    this.setState({
      activeIndex: index
    })
  }
  _renderMenu() {
    const list = ['推荐分类', '京东超市', '唯品会', '男装', '女装', '个护清洁', '运动户外']
    const { activeIndex } = this.state
    return (
      <ScrollView style={styles.menu}>
        {
          list.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => this.onClick(index)}
            >
              <View style={[styles.cell, activeIndex == index ? styles.active_cell : '']}>
                {
                  activeIndex == index ? <View style={styles.line}></View> : null
                }
                <Text style={[styles.label, activeIndex == index ? styles.active_label : '']}>{item}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))
        }
      </ScrollView>
    )
  }
  //
  _renderItem(data) {
    return <View style={styles.item_container}>
      <View style={styles.item}>
        <Image style={styles.category_img}
          source={require('../Home/Demo/img/2.jpg')}
          resizeMode='cover' />
        <Text style={styles.item_label}>{data.item.label}</Text>
      </View>
    </View>
  }

  _renderSectionHeader({ section }) {
    return <View style={styles.sectionHeader}>
      <Text style={styles.header_text}>{section.title}</Text>
    </View>
  }

  genIndicator() {
    return <View style={styles.indicatorContainer}>
      <ActivityIndicator
        style={styles.indicator}
        size='large'
        animating={true}
      />
      <Text>正在加载更多</Text>
    </View>
  }
  _renderMenuItem() {
    return (
      <View style={styles.category_content}>
        <SectionList
          sections={this.state.dataArray[this.state.activeIndex]}
          renderItem={(data => this._renderItem(data))}
          renderSectionHeader={(data) => this._renderSectionHeader(data)}
          contentContainerStyle={styles.listViewStyle}
          refreshControl={
            <RefreshControl
              title='Loading...'
              colors={['red']}
              refreshing={this.state.isLoading}
              onRefresh={() => this.loadData(true)}
              tintColor={'orange'}
            />
          }
        // ListFooterComponent={() => this.genIndicator()}
        // onEndReached={() => {
        // this.loadData()
        // }}
        />
      </View>
    )
  }
  render() {
    let statusBar = {
      backgroundColor: '#484848',
      barStyle: 'light-content'
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
        <View style={styles.category_container}>
          {this._renderMenu()}
          {this._renderMenuItem()}
        </View>
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
  inputContainer: {
    marginLeft: 10,
    // marginRight: 10
  },
  TextInput: {
    fontSize: 13,
    color: '#000',
    height: 34,
    borderRadius: 14,
    padding: 0,
    paddingLeft: 34,
    paddingRight: 10,
    backgroundColor: '#eee',
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
  },

  //
  category_container: {
    flex: 1,
    flexDirection: 'row'
  },
  sectionHeader: {
    flex: 1,
    paddingLeft: 18,
    marginTop: 18,
    marginBottom: 10,
    width: Dimensions.get("window").width
  },
  header_text: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    marginRight: 10
  },
  item_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,

  },
  item: {
    width: '33.3%',
    marginBottom: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  category_img: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  item_label: {
    width: 100,
    marginTop: 2,
    fontSize: 12,
    textAlign: 'center',
    color: '#333'
  },
  indicatorContainer: {
    alignItems: "center"
  },
  indicator: {
    color: 'red',
    margin: 10
  },
  //
  menu: {
    flex: 1,
    // width: 20,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8'
  },
  cell: {
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center"
  },
  active_cell: {
    height: 40,
    backgroundColor: 'white'
  },
  line: {
    width: 4,
    height: 18,
    backgroundColor: 'red',
    position: "absolute",
    left: 0,
    top: 11
  },
  label: {
    fontSize: 14,
    color: '#A9A9A9',
    textAlign: 'center',
  },
  active_label: {
    fontSize: 16,
    fontWeight: '600',
    color: "#000",
  },
  category_content: {
    flex: 3,
    backgroundColor: 'white'
  }
})