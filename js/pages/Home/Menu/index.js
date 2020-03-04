import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
const DOT_WIDTH = 8
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperShow: false,
      activeDotWidth: 14
    }
    this.init()
  }
  init() {
    this.state = {
      menus: [
        {
          label: '超市',
          img: "./icons/chaoshi.png"
        },
        {
          label: '国际',
          img: "./icons/guoji.png"
        },
        {
          label: '手机数码',
          img: "./icons/chaoshi.png"
        },
        {
          label: '电脑办公',
          img: "./icons/diannao.png"
        },
        {
          label: '酒水饮料',
          img: "./icons/chaoshi.png"
        },
        {
          label: '服饰',
          img: "./icons/fushi.png"
        },
        {
          label: '美妆馆',
          img: "./icons/meizhuan.png"
        },
        {
          label: '个护清洁',
          img: "./icons/qingjie.png"
        },
        {
          label: '会员',
          img: "./icons/huiyuan.png"
        },
        {
          label: '全部',
          img: "./icons/quanbu.png"
        },
      ]
    }
  }
  _renderItem() {
    console.log(this.state.menus)
    // this.state.menus.map((item, index) => {
    return <View style={styles.container}>
      <View style={styles.cell}>
        <Image
          style={styles.image}
          source={require('./icons/huiyuan.png')}
          resizeMode='cover'
        />
        <Text style={styles.label}>全部</Text>
      </View>
      <View style={styles.cell}>
        <Image
          style={styles.image}
          source={require('./icons/huiyuan.png')}
          resizeMode='cover'
        />
        <Text style={styles.label}>全部</Text>
      </View>
      <View style={styles.cell}>
        <Image
          style={styles.image}
          source={require('./icons/huiyuan.png')}
          resizeMode='cover'
        />
        <Text style={styles.label}>全部</Text>
      </View>
      <View style={styles.cell}>
        <Image
          style={styles.image}
          source={require('./icons/huiyuan.png')}
          resizeMode='cover'
        />
        <Text style={styles.label}>全部</Text>
      </View>
      <View style={styles.cell}>
        <Image
          style={styles.image}
          source={require('./icons/huiyuan.png')}
          resizeMode='cover'
        />
        <Text style={styles.label}>全部</Text>
      </View>
    </View>

    // })
  }
  render() {
    return (
      <View style={styles.menu_container}>
        {this._renderItem()}
      </View>
    )
  }
}
const styles = {
  menu_container: {
    // flex: 1,
    // position: 'relative',
    // top: -40,
    // height: 400,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    paddingTop: 16
  },
  cell: {
    width: '20%',
    height: 90,
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    // textAlign: 'center'
  },
  image: {
    width: 50,
    height: 50,
  }
}
