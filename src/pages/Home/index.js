import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import Banner from '../../component/Banner';
import Menu from './Menu';
import GoodsList from './GoodsList';
import GoodsCard from './GoodsCard';
import NavigationUtils from '../../navigators/NavigationUtils';

const ANDROID_STATUBAR_HEIGHT = StatusBar.currentHeight;
const offsetTopHeight = -50 - ANDROID_STATUBAR_HEIGHT;
const THEME_COLOR = '#678';
const LOCATION = '上海市';
const TABS = [
  '推荐',
  '手机专区',
  '服饰专区',
  '母婴专区',
  '电脑专区',
  '拼团专区',
];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.navBar = null;
    this.menuList = [
      {
        label: '超市',
        menuIcon: require('./Menu/icons/chaoshi.png'),
      },
      {
        label: '国际',
        menuIcon: require('./Menu/icons/guoji.png'),
      },
      {
        label: '手机数码',
        menuIcon: require('./Menu/icons/chaoshi.png'),
      },
      {
        label: '电脑办公',
        menuIcon: require('./Menu/icons/diannao.png'),
      },
      {
        label: '酒水饮料',
        menuIcon: require('./Menu/icons/chaoshi.png'),
      },
      {
        label: '服饰',
        menuIcon: require('./Menu/icons/fushi.png'),
      },
      {
        label: '美妆馆',
        menuIcon: require('./Menu/icons/meizhuan.png'),
      },
      {
        label: '个护清洁',
        menuIcon: require('./Menu/icons/qingjie.png'),
      },
      {
        label: '会员',
        menuIcon: require('./Menu/icons/huiyuan.png'),
      },
      {
        label: '全部',
        menuIcon: require('./Menu/icons/quanbu.png'),
      },
    ];
    this.state = {
      borderStyle: {},
      searchColor: 'white',
      inputTextColor: '#bbb',
      iconColor: 'white',
      iconBackgroundColor: 'rgba(0,0,0,.48)',
      statusBarbackgroundColor: 'transparent',
      bannerList: [
        {bannerImg: require('./Demo/img/1.jpg')},
        {bannerImg: require('./Demo/img/2.jpg')},
        {bannerImg: require('./Demo/img/3.jpg')},
        {bannerImg: require('./Demo/img/4.jpg')},
        {bannerImg: require('./Demo/img/5.jpg')},
      ],
    };
  }
  getLeftButton() {
    return (
      <TouchableOpacity
        style={[
          styles.navBtn,
          styles.leftBtn,
          {backgroundColor: this.state.iconBackgroundColor},
        ]}>
        {/* <Text
        style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}
      >上海市</Text>
      <EvilIcons
        name={"chevron-down"}
        size={26}
        style={{ color: 'white' }}
      /> */}
        <Ionicons
          name={'ios-qr-scanner'}
          size={22}
          style={{color: this.state.iconColor}}
        />
      </TouchableOpacity>
    );
  }
  goToPage() {
    console.log(1);
    NavigationUtils.goPage('Goods', {spu_id: '788'});
  }
  getRightButton() {
    return (
      <View style={{flexDirection: 'row'}}>
        {/* <TouchableOpacity style={[styles.navBtn,styles.btnMargin]}
    >
      <Ionicons
        name={'ios-qr-scanner'}
        size={22}
        style={{ color: 'white',opacity: 1 }}
      />
    </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => this.goToPage()}
          style={[
            styles.navBtn,
            {backgroundColor: this.state.iconBackgroundColor},
          ]}>
          <AntDesign
            name={'message1'}
            size={22}
            style={{color: this.state.iconColor}}
          />
        </TouchableOpacity>
      </View>
    );
  }
  getSearchInput() {
    return (
      <TouchableOpacity style={styles.inputContainer}>
        <EvilIcons
          name={'search'}
          size={26}
          style={[styles.search, {color: this.state.inputTextColor}]}
        />
        <TextInput
          style={[
            styles.TextInput,
            {
              borderColor: this.state.searchColor,
              backgroundColor: this.state.searchColor,
              color: this.state.inputTextColor,
            },
          ]}
          onChangeText={() => this.onChangeText()}
          placeholder={'搜索商家或商品名称'}
          placeholderTextColor={this.state.inputTextColor}
        />
      </TouchableOpacity>
    );
  }
  onChangeText() {}
  getBanner() {
    return (
      <View style={styles.banner_container}>
        <Image
          style={styles.banner}
          source={require('./Demo/img/1.jpg')}
          resizeMode="cover"
        />
      </View>
    );
  }
  // todo
  getMsgList() {
    let msgList = [
      '世界八大名酒，你都喝了吗',
      '创奇鼠标升级！雷蛇M7890',
      '饮料千千万，戒不掉的肥宅快乐水',
    ];
    return <View />;
  }
  _onScroll = e => {
    let y = e.nativeEvent.contentOffset.y;
    let opacityPercent = y / 100;
    if (y > 10) {
      this.navBar &&
        this.navBar.setNativeProps({
          style: {backgroundColor: `rgba(255,255,255,${opacityPercent})`},
        });
      this.setState({
        statusBarbackgroundColor: '#484848',
        searchColor: '#eee',
        inputTextColor: '#aaa',
        iconColor: '#000',
        borderStyle: {
          borderBottomWidth: 1,
          borderColor: `rgba(229,229,229,${opacityPercent})`,
        },
        iconBackgroundColor: `rgba(255,255,255,${opacityPercent})`,
      });
    } else {
      this.navBar &&
        this.navBar.setNativeProps({
          style: {backgroundColor: `rgba(255,255,255,${opacityPercent})`},
        });
      this.setState({
        statusBarbackgroundColor: 'transparent',
        searchColor: 'white',
        inputTextColor: '#bbb',
        iconColor: 'white',
        borderStyle: {borderColor: `rgba(229,229,229,${opacityPercent})`},
        iconBackgroundColor: 'rgba(0,0,0,.48)',
      });
    }
  };
  // onStop = (e) => {
  //   let { x, y } = e.nativeEvent.contentOffset;
  //   if (y < Px2dp(50)) {
  //     this._scrollView.scrollTo({ x: 0, y: 0, animated: true })
  //   } else if (y < Px2dp(100)) {
  //     this._scrollView.scrollTo({ x: 0, y: Px2dp(100), animated: true })
  //   }
  // }

  render() {
    let statusBar = {
      backgroundColor: this.state.statusBarbackgroundColor,
      barStyle: 'light-content',
    };
    let navigationBar = (
      <NavigationBar
        barRef={el => (this.navBar = el)}
        statusBar={statusBar}
        renderLeftContent={this.getLeftButton()}
        renderRightButton={this.getRightButton()}
        searchInput={this.getSearchInput()}
        style={this.state.borderStyle}
      />
    );
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        onScrollEndDrag={this.onStop}
        onScroll={this._onScroll}
        ref={component => {
          this._scrollView = component;
        }}>
        {navigationBar}
        <Banner
          bannerList={this.state.bannerList}
          style={{
            position: 'relative',
            top: offsetTopHeight,
            left: 0,
            marginBottom: offsetTopHeight,
          }}
        />
        <Menu MenuList={this.menuList} cellStyle={{width: '20%'}} />
        {this.getBanner()}
        <GoodsCard goodsCardType={'day'} />
        <GoodsCard goodsCardType={'life'} />
        <GoodsCard goodsCardType={'computer'} />
        <GoodsCard goodsCardType={'fashion'} />
        <GoodsCard goodsCardType={'drink'} />
        <GoodsList />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
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
  navBtn: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 20,
  },
  btnMargin: {
    marginRight: 10,
  },
  leftBtn: {
    flexDirection: 'row',
  },
  TextInput: {
    fontSize: 13,
    height: 34,
    borderWidth: 1,
    borderRadius: 14,
    padding: 0,
    paddingLeft: 34,
    paddingRight: 10,
    zIndex: -999,
    color: '#000',
  },
  search: {
    position: 'absolute',
    top: 6,
    left: 8,
    zIndex: 999,
  },
  tabStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  barStyle: {
    backgroundColor: THEME_COLOR,
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
    alignItems: 'center',
  },
  // banner
  banner_container: {
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  banner: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
});
