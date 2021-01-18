import React, { Component } from 'react'
import { StyleSheet, Image, Dimensions, Animated, TouchableOpacity } from 'react-native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Header, Block, Text } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ViewUtil from '../../utils/ViewUtil';
import Swiper from 'react-native-swiper';
import { theme } from '../../constants';
import { Rating } from 'react-native-elements';
export default class GoodsDetail extends Component {
  _renderChangeTab () {
    const tabList = ['商品', '评价', '参数', '详情',]
  }
  _renderBanner () {
    const bannerList = [
      { uri: require('../../assets/images/ban6.png') },
      { uri: require('../../assets/images/ban2.png') },
      { uri: require('../../assets/images/ban3.png') },
      { uri: require('../../assets/images/ban4.png') },
      { uri: require('../../assets/images/ban5.png') },
    ]
    const content = <Block style={styles.container}>
      <Swiper style={styles.wrapper}
        autoplay={false}
        paginationStyle={{
          right: 0,
          bottom: 10,
          marginLeft: 240,
        }}>
        {
          bannerList.map((item, index) => (
            <Block key={index} style={styles.slide}>
              <Image
                style={styles.image}
                source={item.uri}
                resizeMode='contain'
              />
            </Block>
          ))
        }
      </Swiper>
    </Block>
    return content
  }
  _renderProperty () {
    return (
      <Block color={'#fff'} padding={[theme.SIZES.base]} style={{ borderBottomStartRadius: 8, borderBottomEndRadius: 8 }}>
        <Block row center space={'between'} padding={[theme.SIZES.base / 2, 0]}>
          <Text primary>
            ￥<Text primary bold title>3599</Text>.00
          </Text>
          <TouchableOpacity style={styles.goods_info_heart}>
            <Ionicons
              name={'heart-outline'}
              size={theme.SIZES.icon}
              style={{ color: theme.COLORS.black }}
            />
          </TouchableOpacity>
        </Block>
        {/* goods_name */}
        <Block>
          <Text numberOfLines={2} ellipsizeMode="tail">
            HUAWEI MateBook X 2020款 集显 i5 16G 512G（冰霜银）13英寸3K触控全面屏 轻至1kg超轻薄华为笔记本电脑
          </Text>
          <Text caption black1 numberOfLines={2} ellipsizeMode="tail">
            荣耀9X 麒麟810 4000mAh超强续航 6GB+128GB (黑色)
          </Text>
        </Block>
      </Block>
    )
  }
  _renderPromotion () {
    return <Block
      row
      space={'between'}
      color={'#fff'}
      padding={theme.SIZES.base}
      style={{ marginTop: theme.SIZES.base / 2, borderRadius: 8 }}
    >
      <Text style={{ alignSelf: 'flex-start' }} header bold>优惠</Text>
      <Block block column>
        <Block row center>
          <Block style={styles.promotionTip}>
            <Text small primary>赠送积分</Text>
          </Block>
          <Block block>
            <Text caption numberOfLines={1} ellipsizeMode="tail">以旧换新最高补贴500元以旧换新最高补贴50元</Text>
          </Block>
        </Block>
        <Block row margin={[theme.SIZES.base / 2, 0, 0, 0]}>
          <Block style={styles.promotionTip}>
            <Text small primary>分期免息</Text>
          </Block>
          <Block block>
            <Text caption numberOfLines={1} ellipsizeMode="tail">以旧换新最高补贴500元以旧换新最高补贴50元</Text>
          </Block>
        </Block>
      </Block>
      <Block style={{ alignSelf: 'flex-start' }}>
        {ViewUtil.getMoreButton(() => { }, theme.COLORS.black1)}
      </Block>
    </Block>
  }
  _renderMain () {
    return <Block
      color={'#fff'}
      style={{ marginTop: theme.SIZES.base / 2, borderRadius: 8 }}
    >
      {/* // sku */}
      <Block row center padding={[theme.SIZES.base / 2, theme.SIZES.base]} style={styles.borderBottom}>
        <Text header bold>已选</Text>
        <Text caption bold style={{ marginLeft: 10, flex: 1 }}>丹霞橙(8+256G)，1件，可选服务</Text>
        <Block style={{ alignSelf: 'flex-start' }}>
          {ViewUtil.getMoreButton(() => { }, theme.COLORS.black1)}
        </Block>
      </Block>
      {/* // address */}
      <Block row center padding={[theme.SIZES.base / 2, theme.SIZES.base]} style={styles.borderBottom}>
        <Text header bold style={{ alignSelf: 'flex-start' }}>送至</Text>
        <Block block style={{ marginLeft: 10 }}>
          <Text caption>广东广州天河区</Text>
          <Text small black1 style={{ marginTop: theme.SIZES.base / 4 }}>今天21:59前付款，预计1月19日（明天）送达</Text>
        </Block>
        <Block style={{ alignSelf: 'flex-start' }}>
          {ViewUtil.getMoreButton(() => { }, theme.COLORS.black1)}
        </Block>
      </Block>
      {/* // service */}
      <Block row center padding={[theme.SIZES.base / 2, theme.SIZES.base]}>
        <Text header bold style={{ alignSelf: 'flex-start' }}>服务</Text>
        <Block block style={{ marginLeft: 10 }}>
          <Block row center>
            <Image source={require('../../assets/images/icon_discount.png')} style={{ width: 16, height: 16 }} resizeMode='cover' />
            <Text caption style={{ marginLeft: 4 }}>已满48包邮</Text>
          </Block>
          <Block row center style={{ marginTop: theme.SIZES.base / 4 }}>
            <Image source={require('../../assets/images/icon_discount.png')} style={{ width: 16, height: 16 }} resizeMode='cover' />
            <Text caption style={{ marginLeft: 4 }}>由终端提供商品，发货开票及售后服务</Text>
          </Block>
        </Block>
        <Block style={{ alignSelf: 'flex-start' }}>
          {ViewUtil.getMoreButton(() => { }, theme.COLORS.black1)}
        </Block>
      </Block>
    </Block>
  }
  _renderComment () {
    const commentImg = [
      { uri: require('../../assets/images/ban6.png') },
      { uri: require('../../assets/images/ban2.png') },
      { uri: require('../../assets/images/ban3.png') },
      { uri: require('../../assets/images/ban4.png') },
      { uri: require('../../assets/images/ban5.png') },
    ]
    return <Block color={'white'} padding={[theme.SIZES.base]} margin={[theme.SIZES.base / 2, 0, 0, 0]} radius={8}>
      <Block row center space={'between'}>
        <Text header bold>用户评价（1898）</Text>
        <Block row center>
          <Text black1 caption>98%</Text>
          <Text black1 caption>好评</Text>
          {ViewUtil.getRightBackButton(() => { }, theme.COLORS.black1)}
        </Block>
      </Block>
      <Block row padding={[theme.SIZES.base / 2, 0]}>
        <TouchableWithoutFeedback onPress={() => { }} style={[styles.commentTip, styles.commentActiveTip]}>
          <Text primary caption>全部</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => { }} style={styles.commentTip}>
          <Text caption>热门 378</Text>
        </TouchableWithoutFeedback>
      </Block>
      <Block>
        <Block row padding={[theme.SIZES.base / 2, 0]}>
          <Image source={require('../../assets/images/shouji.png')} style={{ width: 30, height: 30 }} resizeMode="cover" />
          <Block column margin={[0, 0, 0, theme.SIZES.base / 2]}>
            <Text caption>Reeyou</Text>
            <Rating
              type='custom'
              ratingColor={theme.COLORS.primary}
              ratingBackgroundColor='#eee'
              tintColor="#fff"
              startingValue={4}
              readonly={true}
              imageSize={12}
            />
          </Block>
        </Block>
        <Block>
          <Text caption>手机收到了，很漂亮，应该质量很好，看到很满意，特别是物流很快，下单以后一天就收到了，很满意，谢谢😊</Text>
          <ScrollView style={{ paddingVertical: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              commentImg.map((item, index) => (
                <Image
                  key={index}
                  style={{ width: 60, height: 60, borderRadius: 8, marginRight: 10 }}
                  source={item.uri}
                  resizeMode="cover"
                />
              ))
            }

          </ScrollView>
          <Text small black1>亮黑色,8GB+256GB</Text>
        </Block>
        <TouchableWithoutFeedback onPress={() => { }} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text caption style={styles.commentBtn}>查看全部评价</Text>
        </TouchableWithoutFeedback>
      </Block>
    </Block>
  }
  _renderScrollTip () {
    return <Block row center middle color={'white'} padding={[theme.SIZES.base, 0]}>
      <Ionicons
        name={'chevron-up-outline'}
        size={theme.SIZES.icon}
        style={{ color: theme.COLORS.black1 }}
      />
      <Text body black1>上拉查看图文详情</Text>
    </Block>
  }
  _renderDetail () {
    return <Block color={'white'} radius={8} margin={[10, 0, 0, 0]}>
      <Block cloumn padding={[0, theme.SIZES.base / 4]}>
        <Image source={require('../../assets/images/detail1.jpg')} style={{ width: '100%', height: 580 }} resizeMode="contain" />
        <Image source={require('../../assets/images/detail2.jpg')} style={{ width: '100%', height: 270 }} resizeMode="contain" />
      </Block>
      <Block center padding={[theme.SIZES.base, 0, theme.SIZES.base + 10, 0]}>
        <Image source={require('../../assets/images/icon-bottom-logo.png')} style={{ width: 140, height: 20 }} resizeMode="cover" />
      </Block>
    </Block>
  }
  _renderActionArea () {
    return <Block row center style={styles.detail_cart} padding={[0, theme.SIZES.base]}>
      <Block column>
        <Ionicons
          name={'home-outline'}
          size={theme.SIZES.icon}
          style={{ color: theme.COLORS.black }}
        />
        <Text small black>首页</Text>
      </Block>
      <Block column center padding={[0, theme.SIZES.base]}>
        <Ionicons
          name={'cart-outline'}
          size={theme.SIZES.icon}
          style={{ color: theme.COLORS.black }}
        />
        <Text small black>购物车</Text>
      </Block>
      <Block block row center>
        <Text style={styles.add}>加入购物车</Text>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('OrderConfirm')}>
          <Text style={styles.buy}>立即购买</Text>
        </TouchableWithoutFeedback>
      </Block>
    </Block>
  }
  _renderLeftContent () {
    return <Block style={styles.iconBg}>
      {ViewUtil.getLeftBackButton(() => { }, '#fff')}
    </Block >
  }
  _renderRightContent () {
    return (
      <Block row center>
        <Block style={[styles.iconBg, { marginRight: 10 }]}>
          {
            ViewUtil.getShareButton(() => { }, '#fff')
          }
        </Block>
        <Block style={styles.iconBg}>
          {
            ViewUtil.getMoreButton(() => { }, '#fff')
          }
        </Block>
      </Block>
    );
  }
  /**
* 上拉触底
*/
  _contentViewScroll = (e) => {

    var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
    var contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
    var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度


    if (offsetY + oriageScrollHeight >= contentSizeHeight) {
      console.log(1)
      // 在这里面加入你需要指行得方法和加载数据
    } else if (offsetY + oriageScrollHeight <= 1) {
      //这个是没有数据了然后给了false  得时候还在往上拉
      console.log(2)
    } else if (offsetY == 0) {
      //这个地方是下拉刷新，意思是到顶了还在指行，可以在这个地方进行处理需要刷新得数据
      console.log(3)
    }
  }
  render () {
    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <Block style={{ position: 'relative' }}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={this._contentViewScroll}
        >
          <Header status={statusBar}
            leftContent={this._renderLeftContent()}
            rightContent={this._renderRightContent()}
            style={{ backgroundColor: 'transparent' }}
          />
          <Block style={{ position: 'relative', top: -40, }}>
            {this._renderBanner()}
            {this._renderProperty()}
            {this._renderPromotion()}
            {this._renderMain()}
            {this._renderComment()}
            {this._renderScrollTip()}
          </Block>
        </Animated.ScrollView>
        {/* <Block>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this._renderDetail()}
          </ScrollView>
        </Block> */}
        {this._renderActionArea()}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 320,
    paddingHorizontal: 6,
    paddingVertical: 10,
    backgroundColor: '#fff',
    zIndex: -99
  },
  wrapper: {
    borderRadius: 10,
  },
  slide: {
    backgroundColor: 'transparent'
  },
  image: {
    width: '100%',
    height: '100%',
    paddingVertical: 10,
    borderRadius: 10,
  },
  iconBg: {
    backgroundColor: 'rgba(0,0,0,.28)',
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  promotionTip: {
    marginTop: 2,
    marginLeft: theme.SIZES.base / 2,
    marginRight: theme.SIZES.base / 4,
    paddingHorizontal: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: theme.COLORS.primary,
    borderRadius: 50
  },
  commentTip: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: '#eee',
    marginRight: 8,
  },
  commentActiveTip: {
    backgroundColor: theme.COLORS.accent,
  },
  commentBtn: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.COLORS.black1,
    borderRadius: 50
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.COLORS.gray1
  },
  detail_cart: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderTopColor: theme.COLORS.black2,
    borderTopWidth: 1,
  },
  add: {
    backgroundColor: theme.COLORS.primary,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buy: {
    flex: 1,
    backgroundColor: '#ca101d',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  marginTop10: {
    marginTop: 10
  }
})
