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
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NavigationBar from '../../component/NavigationBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient';
import ScrollTab from './ScrollTab'
import Slider from './Recommend/slider'
import Menu from './Recommend/Menu/index'
import Swiper from 'react-native-swiper';

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
        source={require('./Recommend/img/2.jpg')}
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
  getBaseItem() {
    return (
      <View style={styles.base_item}>
        <Image
          style={styles.itemPic}
          source={require('./item/item2.png')}
          resizeMode='contain'
        />
        <View style={styles.topContainer}>
          <View style={styles.leftStyle}>
            <Image
              style={styles.leftPic}
              source={require('./Recommend/img/2.jpg')}
              resizeMode='cover'
            />
            <Text style={styles.leftLabel}>精致甜美短外套，小资优雅显魔力</Text>
          </View>
          <View style={styles.rightStyle}>
            <View style={styles.labelContainer}>
              <Text style={styles.item_line}></Text>
              <Text style={styles.item_label}>游戏笔电</Text>
              <Text style={styles.item_line}></Text>
            </View>
            <View style={styles.smallPicWrapper}>
              <Image style={styles.smallPic}
                source={require('./Recommend/img/2.jpg')}
                resizeMode='cover' />
              <Image style={styles.smallPic}
                source={require('./Recommend/img/2.jpg')}
                resizeMode='cover' />
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.b_l_container}>
            <Text style={styles.mainTitle}>酷玩科技</Text>
            <Text style={styles.subTitle}>大疆首款运动相机体验</Text>
            <View style={[styles.smallPicWrapper, styles.b_l_picWrapper]}>
              <Image style={styles.smallPic}
                source={require('./Recommend/img/2.jpg')}
                resizeMode='cover' />
              <Image style={styles.smallPic}
                source={require('./Recommend/img/2.jpg')}
                resizeMode='cover' />
            </View>
          </View>
          <View style={styles.b_r_container}>
            <View>
              <Text style={styles.mainTitle}>免息星球</Text>
              <Text style={styles.subTitle}>白条免息购</Text>
              <Image style={[styles.smallPic, styles.b_r_smallPic]}
                source={require('./Recommend/img/2.jpg')}
                resizeMode='cover' />
            </View>
            <View>
              <Text style={styles.mainTitle}>运动户外</Text>
              <Text style={styles.subTitle}>硬核穿搭</Text>
              <Image style={[styles.smallPic, styles.b_r_smallPic]}
                source={require('./Recommend/img/2.jpg')}
                resizeMode='cover' />
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderRecommend() {
    return (
      <View style={[styles.base_item,styles.recommend]}>
        <Image
          style={styles.itemPic}
          source={require('./item/item2.png')}
          resizeMode='contain'
        />
        <View style={styles.recommend_container}>
          <View style={styles.recommend_item}>
            <Image
              style={styles.recommend_img}
              source={require('./Recommend/img/5.jpg')}
              resizeMode='cover'
            />
            <Text numberOfLines={2} style={styles.name}>【新连接领专属礼】莱蒂卡森 实木床1.8米双人床北欧软包背靠1.5单人床</Text>
            <Text style={styles.price_wrapper}>￥<Text style={styles.price}>390</Text>.00</Text>
          </View>
          <View style={styles.recommend_item}>
            <Image
              style={styles.recommend_img}
              source={require('./Recommend/img/2.jpg')}
              resizeMode='cover'
            />
            <Text numberOfLines={2} style={styles.name}>【新连接领专属礼】莱蒂卡森 实木床1.8米双人床北欧软包背靠1.5单人床</Text>
            <Text style={styles.price_wrapper}>￥<Text style={styles.price}>390</Text>.00</Text>
          </View>
        </View>
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
        <Slider />
        <Menu />
        {this.getBanner()}
        {this.getBaseItem()}
        {this.getBaseItem()}
        {this.getBaseItem()}
        {this.renderRecommend()}
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
  },

  // baseitem
  base_item: {
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  itemPic: {
    width: '100%',
    height: 50,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  leftStyle: {
    flex: 1,
    marginRight: 2,
  },
  rightStyle: {
    flex: 1,
    marginLeft: 2,
    backgroundColor: 'pink',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  leftPic: {
    width: '100%',
    height: 130,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  leftLabel: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    color: 'white'
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10
  },
  item_line: {
    width: 20,
    height: 2,
    backgroundColor: 'white'
  },
  item_label: {
    textAlign: 'center',
    color: 'white'
  },
  smallPicWrapper: {
    flexDirection: 'row',
    marginTop: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  smallPic: {
    width: 80,
    height: 80,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 6
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  b_r_container: {
    flex: 1,
    marginLeft: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  b_l_container: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 2,
  },
  b_l_picWrapper: {
    paddingLeft: 4,
    marginTop: 4,
    paddingBottom: 10
  },
  mainTitle: {
    marginTop: 5,
    fontSize: 14,
    paddingLeft: 10,
  },
  subTitle: {
    fontSize: 10,
    color: '#aaa',
    paddingLeft: 10,
  },
  b_r_smallPic: {
    marginTop: 4
  },

  // recommend
  recommend: {
    marginBottom: 20
  },
  recommend_container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  recommend_item: {
    width: '49.5%',
    backgroundColor: 'white',
    borderRadius: 10
  },
  recommend_img: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // height: 100,
  },
  name: {
    fontSize: 14,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
  price_wrapper: {
    color: 'red',
    paddingLeft: 5
  },
  price: {
    fontSize: 16,
    
  }
})