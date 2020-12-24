import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  // TouchableWithoutFeedback,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import ART from '@react-native-community/art'
import { Header, Swiper } from '../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ANDROID_STATUBAR_HEIGHT = StatusBar.currentHeight;
const offsetTopHeight = -50 - ANDROID_STATUBAR_HEIGHT;
const WIDTH = Dimensions.get('window').width;
const THEME_COLOR = 'white';
// const {
//   Surface, //  一个矩形可渲染的区域，是其他元素的容器
//   Shape, // 形状定义，可填充
//   Path, // 路径
// } = ART;
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusBarbackgroundColor: 'transparent',
      navBarColor: '#ccc',
      iconColor: 'white',
      isShow: false,
      borderStyle: {},
      swiperList: [
        { uri: require('../assets/images/user1.jpg') },
        { uri: require('../assets/images/user2.jpg') },
        { uri: require('../assets/images/user3.jpg') },
        { uri: require('../assets/images/user4.jpg') },
      ]
    };
    this.navBar = null;
    this.menuList = [
      { label: '商城公告', menuIcon: require('../assets/images/11.png') },
      { label: '图片专区', menuIcon: require('../assets/images/11.png') },
      { label: '视频专区', menuIcon: require('../assets/images/11.png') },
      { label: '商城资讯', menuIcon: require('../assets/images/11.png') },
      { label: '视频专区', menuIcon: require('../assets/images/11.png') },
      { label: '商城资讯', menuIcon: require('../assets/images/11.png') },
    ];
  }
  // componentWillMount() {
  //   this._renderCurve();
  // }
  getLeftContent () {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 18 }}>
        {this.state.isShow ? (
          <Image
            style={{ width: 30, height: 30, borderRadius: 30 }}
            source={require('../assets/images/12.png')}
            resizeMode="cover"
          />
        ) : null}
      </TouchableOpacity>
    );
  }
  getRightButton () {
    return (
      <TouchableOpacity style={{ flexDirection: 'row' }}>
        <Ionicons
          name={'settings-outline'}
          size={22}
          style={{ color: this.state.iconColor }}
        />
        <Ionicons
          name={'chatbubble-ellipses-outline'}
          size={22}
          style={{ color: this.state.iconColor, marginLeft: 10 }}
        />
      </TouchableOpacity>
    );
  }
  renderTitle () {
    return (
      <View>
        {this.state.isShow ? <Text style={{color: '#fff', marginLeft: 10}}>我的</Text> : null}
      </View>
    );
  }
  // 绘制用户信息贝塞尔曲线
  // _renderCurve() {
  //   let path = Path()
  //     .move(0, 0)
  //     .curve(WIDTH / 2, 40, WIDTH, 0)
  //     .close();

  //   return (
  //     <Surface
  //       width={WIDTH}
  //       height={20}
  //       style={{backgroundColor: '#f5f5f5', marginTop: 10}}>
  //       <Shape d={path} fill="rgb(236, 75, 52)" strokeWidth={1} />
  //     </Surface>
  //   );
  // }

  _renderUserInfo () {
    const { navigation } = this.props;
    return (
      <View style={styles.userInfo}>
        <View
          style={{
            width: WIDTH,
            backgroundColor: 'rgb(236, 75, 52)',
          }}>
          <View style={styles.user_content}>
            <Image
              style={styles.avatar}
              source={require('../assets/images/12.png')}
              resizeMode="cover"
            />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <View style={styles.login_content}>
                <Text style={styles.login_text}>登录/注册</Text>
                <AntDesign name={'right'} size={14} style={{ color: '#fff' }} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* {this._renderCurve()} */}
      </View>
    );
  }
  _renderRecommend () {
    const data = [
      { uri: require('../assets/images/1.jpg') },
      { uri: require('../assets/images/2.jpg') },
      { uri: require('../assets/images/3.jpg') },
      { uri: require('../assets/images/4.jpg') },
      { uri: require('../assets/images/5.jpg') }
    ]
    return (
      <View style={{ marginHorizontal: 8, marginTop: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>猜你喜欢</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}>
          {data.map((item, index) => {
            return <View style={[{ width: '50%', marginBottom: 8 }]} key={index}>
              <TouchableWithoutFeedback style={[index % 2 !== 0 ? { marginLeft: 8 } : null, { backgroundColor: '#fff', borderRadius: 8 }]}>
                <Image style={{ width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={item.uri} resizeMode='cover' />
                <View style={{ padding: 10 }}>
                  <Text style={{ color: '#333', fontSize: 14 }}>Huawei mate40</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 10, top: -3, textAlign: 'left' }}>￥</Text>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16, textAlign: 'left' }}>3990</Text>
                  </View>
                  <Text style={{ color: '#999', fontSize: 12 }}>暂无评价</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          }
          )}
        </View>

      </View>
    )
  }
  // 订单
  renderOrderTab () {
    const orderArray = [
      { Icon: 'Ionicons', icons: 'wallet-outline', label: '待付款' },
      // { Icon: 'Ionicons', icons: 'bus-outline', label: '待发货' },
      { Icon: 'Ionicons', icons: 'briefcase-outline', label: '待收货' },
      { Icon: 'Ionicons', icons: 'server-outline', label: '退换/售后' },
      { Icon: 'Ionicons', icons: 'chatbox-ellipses-outline', label: '待评价' },
    ];
    const _render = (item) => {
      switch (item.Icon) {
        case 'MaterialIcons':
          return (
            <MaterialIcons
              name={item.icons}
              size={24}
              style={{ color: '#666' }}
            />
          )
          break;
        case 'Ionicons':
          return (
            <Ionicons
              name={item.icons}
              size={24}
              style={{ color: '#666' }}
            />
          )
          break;
        default:
          break;
      }
    }
    return (
      <View style={styles.order_container}>
        <View style={styles.order_header}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}>我的订单</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 12 }}>全部订单</Text>
            <AntDesign name={'right'} size={12} style={{ color: '#aaa' }} />
          </View>
        </View>
        <View style={styles.order_item_container}>
          {orderArray.map((item, index) => (
            <View key={index} style={styles.order_item}>
              {
                _render(item)
              }
              <Text style={styles.order_label}>{item.label}</Text>
            </View>
          ))}
        </View>

        <Swiper style={{ marginTop: 10 }} swiperList={this.state.swiperList} />
      </View>
    );
  }
  _renderVip () {
    return (
      <View style={styles.order_container}>
        <View style={styles.order_header}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}>会员专享</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 12 }}>更多会员权益</Text>
            <AntDesign name={'right'} size={12} style={{ color: '#aaa' }} />
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ width: 170, height: 120 }}>
            <Image source={require('../assets/images/vip_bg.png')} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} resizeMode="contain" />
            <View style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
              <View style={{ display: 'flex', width: 128, paddingLeft: 16, position: 'relative', top: 26, }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 14, top: -4, textAlign: 'left' }}>￥</Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 26, textAlign: 'left' }}>100</Text>
                </View>
                <Text style={{ fontSize: 10 }}>华为畅享10s 100元优惠卷</Text>
              </View>
              <View style={{ width: 35, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 13 }}>领取</Text>
              </View>
            </View>
          </View>
          <View style={{ width: 170, height: 120 }}>
            <Image source={require('../assets/images/vip_bg.png')} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} resizeMode="contain" />
            <View style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
              <View style={{ display: 'flex', width: 128, paddingLeft: 16, position: 'relative', top: 26, }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 14, top: -4, textAlign: 'left' }}>￥</Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 26, textAlign: 'left' }}>100</Text>
                </View>
                <Text style={{ fontSize: 10 }}>华为畅享10s 100元优惠卷</Text>
              </View>
              <View style={{ width: 35, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 13 }}>领取</Text>
              </View>
            </View>
          </View>
          <View style={{ width: 170, height: 120 }}>
            <Image source={require('../assets/images/vip_bg.png')} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} resizeMode="contain" />
            <View style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
              <View style={{ display: 'flex', width: 128, paddingLeft: 16, position: 'relative', top: 26, }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 14, top: -4, textAlign: 'left' }}>￥</Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 26, textAlign: 'left' }}>100</Text>
                </View>
                <Text style={{ fontSize: 10 }}>华为畅享10s 100元优惠卷</Text>
              </View>
              <View style={{ width: 35, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 13 }}>领取</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
  _onScroll = e => {
    let y = e.nativeEvent.contentOffset.y;
    let opacityPercent = y / 100;
    if (y > 10) {
      this.navBar &&
        this.navBar.setNativeProps({
          // style: { backgroundColor: `rgba(236, 75, 52,${opacityPercent})` },
          // style: { backgroundColor: 'rgba(236, 75, 52,.1)' },
        });
      this.setState({
        statusBarbackgroundColor: 'rgb(236, 75, 52)',
        // navBarColor: `rgba(236, 75, 52,${opacityPercent})`,
        // iconColor: ,
      });
      if (opacityPercent > 0.68) {
        this.setState({
          isShow: true,
        });
      } else {
        this.setState({
          isShow: false,
        });
      }
    } else {
      this.navBar &&
        this.navBar.setNativeProps({
          // style: { backgroundColor: `rgba(236, 75, 52,${opacityPercent})` },
        });
      this.setState({
        statusBarbackgroundColor: 'transparent',
        // navBarColor: `rgba(236, 75, 52,${opacityPercent})`,
        // iconColor: 'white',
      });
    }
  };
  render () {
    let statusBar = {
      backgroundColor: this.state.statusBarbackgroundColor,
      barStyle: 'light-content',
    };
    let navigationBar = (
      <Header
        barRef={el => (this.navBar = el)}
        statusBar={statusBar}
        leftContent={this.getLeftContent()}
        rightContent={this.getRightButton()}
        searchInput={this.renderTitle()}
        contentStyle={{ justifyContent: 'center' }}
        style={[this.state.borderStyle, { backgroundColor: 'rgb(236, 75, 52)' }]}
      />
    );
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={this._onScroll}
        stickyHeaderIndices={[0]}
        ref={component => {
          this._scrollView = component;
        }}>
        {navigationBar}
        {this._renderUserInfo()}
        {this.renderOrderTab()}
        {this._renderVip()}
        {this._renderRecommend()}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f5f5f5',
  },
  //==================//
  userInfo: {
    width: WIDTH,
    // position: 'relative',
    // top: offsetTopHeight,
    // left: 0,
    // marginBottom: offsetTopHeight,
    // elevation: -1,
    backgroundColor: '#000',
  },
  user_content: {
    paddingBottom: 40,
    paddingLeft: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // height: 200,
    backgroundColor: 'rgb(236, 75, 52)',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  login_content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login_text: {
    color: 'white',
    marginLeft: 10,
    fontSize: 14,
  },

  // order //
  order_container: {
    // height: 300,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 8,
    paddingVertical: 4,
  },
  order_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 4,
  },
  order_item_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  order_item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  order_label: {
    fontSize: 12,
    marginTop: 2,
    color: '#666',
  },

  // tool
  tool_container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});