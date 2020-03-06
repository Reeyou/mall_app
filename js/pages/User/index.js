import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ART,
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Menu from '../Home/Menu'
import RecommendGoods from '../../component/RecommendGood'

const ANDROID_STATUBAR_HEIGHT = StatusBar.currentHeight
const offsetTopHeight = -50 - ANDROID_STATUBAR_HEIGHT
const WIDTH = Dimensions.get('window').width
const THEME_COLOR = 'white'
const {
  Surface, //  一个矩形可渲染的区域，是其他元素的容器
  Shape, // 形状定义，可填充
  Path, // 路径
} = ART;
export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statusBarbackgroundColor: "transparent",
      navBarColor: '#ccc',
      iconColor: 'white',
      isShow: false,
      borderStyle: {},
    }
    this.navBar = null
    this.menuList = [
      { label: '商城公告', menuIcon: require("../Home/Menu/icons/chaoshi.png") },
      { label: '图片专区', menuIcon: require('../Home/Menu/icons/shuma.png') },
      { label: '视频专区', menuIcon: require('../Home/Menu/icons/lvxing.png') },
      { label: '商城资讯', menuIcon: require('../Home/Menu/icons/zhuanqian.png') },
      { label: '视频专区', menuIcon: require('../Home/Menu/icons/lvxing.png') },
      { label: '商城资讯', menuIcon: require('../Home/Menu/icons/zhuanqian.png') }
    ]
  }
  componentWillMount() {
    this._renderCurve()
  }
  getLeftContent() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      {
        this.state.isShow ? <Image
          style={{ width: 30, height: 30, borderRadius: 30 }}
          source={require('../Home/Demo/img/2.jpg')}
          resizeMode='cover'
        /> : null
      }
    </TouchableOpacity>
  }
  getRightButton() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <AntDesign
        name={'message1'}
        size={22}
        style={{ color: this.state.iconColor }}
      />
    </TouchableOpacity>
  }
  renderTitle() {
    return(
      <View>
        {this.state.isShow ?<Text style={styles.title}>我的</Text>:null}
      </View>
    )
  }
  // 绘制用户信息贝塞尔曲线
  _renderCurve() {
    let d_path = Path('M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z M 0 0 h 360 v 183.1 C 300 207 240 219 180 219 S 60 207 0 183.1 V 0 Z');
    let path = Path().move(0, 0).curve(WIDTH / 2, 40, WIDTH, 0).close()

    return <Surface width={WIDTH} height={20} style={{ backgroundColor: '#f5f5f5', marginTop: 10 }}>
      <Shape d={path} fill='#ccc' strokeWidth={1} />
    </Surface>
  }

  _renderUserInfo() {
    return <View style={styles.userInfo}>
      <View style={{ width: WIDTH, height: 150, backgroundColor: '#ccc', marginBottom: -10 }}>
        <View style={styles.user_content}>
          <Image
            style={styles.avatar}
            source={require('../Home/Demo/img/2.jpg')}
            resizeMode='cover'
          />
          <TouchableOpacity>
            <View style={styles.login_content}>
              <Text style={styles.login_text}>登录/注册</Text>
              <AntDesign
                name={'right'}
                size={22}
                style={{ color: '#fff' }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {this._renderCurve()}
    </View>
  }

  // 订单
  renderOrderTab() {
    const orderArray = [
      { Icon: 'MaterialIcons', icons: 'payment', label: '待付款' },
      { Icon: 'MaterialIcons', icons: 'payment', label: '待收货' },
      { Icon: 'MaterialIcons', icons: 'payment', label: '待评价' },
      { Icon: 'MaterialIcons', icons: 'payment', label: '退换/售后' },
      { Icon: 'MaterialIcons', icons: 'payment', label: '我的订单' }
    ]
    return (
      <View style={styles.order_container}>
        {
          orderArray.map((item, index) => (
            <View style={styles.order_item}>
              <MaterialIcons
                name={item.icons}
                size={24}
                style={{ color: '#666' }}
              />
              <Text style={styles.order_label}>{item.label}</Text>
            </View>
          ))
        }
      </View>
    )
  }
  _onScroll = (e) => {
    let y = e.nativeEvent.contentOffset.y
    let opacityPercent = y / 100
    if (y > 10) {
      this.navBar && this.navBar.setNativeProps({
        style: { backgroundColor: `rgba(255,255,255,${opacityPercent})` }
      })
      this.setState({
        statusBarbackgroundColor: '#484848',
        navBarColor: `rgba(255,255,255,${opacityPercent})`,
        iconColor: `rgba(0,0,0,${opacityPercent})`,
        borderStyle: { borderBottomWidth: 1,borderColor: `rgba(229,229,229,${opacityPercent})` },
      })
      if(opacityPercent > 0.88) {
        this.setState({
          isShow: true
        })
      } else {
        this.setState({
          isShow: false
        })
      }
    } else {
      this.navBar && this.navBar.setNativeProps({
        style: { backgroundColor: `rgba(255,255,255,${opacityPercent})` }
      })
      this.setState({
        statusBarbackgroundColor: "transparent",
        navBarColor: `rgba(255,255,255,${opacityPercent})`,
        borderStyle: {borderColor: `rgba(229,229,229,${opacityPercent})`},
        iconColor: 'white',
      })
    }
  }
  render() {
    let statusBar = {
      backgroundColor: this.state.statusBarbackgroundColor,
      barStyle: 'light-content'
    }
    let navigationBar = <NavigationBar
      barRef={el => this.navBar = el}
      statusBar={statusBar}
      renderLeftContent={this.getLeftContent()}
      renderRightButton={this.getRightButton()}
      searchInput={this.renderTitle()}
      contentStyle={{justifyContent: 'center'}}
      style={this.state.borderStyle}
    />
    return (
      <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={this._onScroll}
        stickyHeaderIndices={[0]}
        ref={(component) => { this._scrollView = component }}
      >
        {navigationBar}
        {this._renderUserInfo()}
        {this.renderOrderTab()}
        <View style={styles.tool_container}>
          <Menu MenuList={this.menuList} cellStyle={{ width: '20%' }} />
        </View>
        <RecommendGoods />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10,
    textAlign: 'center'
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
    backgroundColor: 'transparent'
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

  //==================//
  userInfo: {
    width: WIDTH,
    position: 'relative',
    top: offsetTopHeight,
    left: 0,
    marginBottom: offsetTopHeight,
    elevation: -1,
  },
  user_content: {
    marginTop: 60,
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // height: 200,
    backgroundColor: '#ccc'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  login_content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  login_text: {
    color: 'white',
    marginLeft: 20,
    fontSize: 18
  },

  // order //
  order_container: {
    height: 72,
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  order_item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  order_label: {
    fontSize: 12,
    marginTop: 6,
    color: '#666'
  },

  // tool
  tool_container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  }
})