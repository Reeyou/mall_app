import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, SearchBar, Block, Text } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ViewUtil from '../../utils/ViewUtil';
import { theme } from '../../constants';
export default class OrderConfirm extends Component {

  _renderAddress () {
    return <Block color={'white'} padding={[0, theme.SIZES.base]}>
      <Block row space={'between'}>
        <Block row center>
          <Text bold body>贺军</Text>
          <Text bold body>13925053812</Text>
          <Text small primary style={styles.promotionTip}>默认</Text>
        </Block>
        <Block>
          {
            ViewUtil.getMoreButton(() => { })
          }
        </Block>
      </Block>
      <Text small style={{ paddingVertical: 5 }}>广东广州市天河区 棠下街道 塘尾里九号</Text>
      <Image
        source={require('../../assets/images/add-border.png')}
        style={{ width: '100%', height: 2 }}
        resizeMode="cover"
      />
    </Block>
  }
  _renderGoodsInfo () {
    return <Block color={'white'} padding={[0, theme.SIZES.base]}>
      <Block column margin={[theme.SIZES.base / 2, 0, 0, 0]} color={'white'}>
        <Block row space={'between'} padding={[theme.SIZES.base, 0]}>
          <Image source={require('../../assets/images/3.jpg')} style={{ width: 80, height: 80 }} resizeMode="cover" />
          <Block block colunm padding={[0, theme.SIZES.base / 2]}>
            <Block row wrap>
              <Text height={20} body>荣耀魔方蓝牙耳机 荣耀魔方蓝牙耳机（树莓红）荣耀魔方蓝牙耳机</Text>
            </Block>
            <Text caption black1 style={{ marginTop: 2 }}>树莓红 单品</Text>
            <Block row space={'between'} style={{ marginTop: 2 }}>
              <Text header primary bold>￥399</Text>
              <Text caption black1>x1</Text>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block
        row
        center
        space={'between'}
        style={{ height: 44 }}
      >
        <Text caption>配送</Text>
        <Block row center>
          <Text style={{ marginRight: 4 }}>标准配送</Text>
          <Text caption bold>2021-01-23(明天)</Text>
        </Block>
      </Block>
      <Block
        row
        center
        space={'between'}
        style={{ height: 44 }}
      >
        <Text caption>优惠卷</Text>
        <Block row center>
          <Text caption bold style={{ marginRight: 4 }}>无可用优惠券</Text>
          {
            ViewUtil.getMoreButton(() => { })
          }
        </Block>
      </Block>
      <Block
        row
        center
        space={'between'}
        style={{ height: 44 }}
      >
        <Text caption>积分</Text>
        <Block row center>
          <Text caption bold style={{ marginRight: 4 }}>5积分</Text>
          {
            ViewUtil.getMoreButton(() => { })
          }
        </Block>
      </Block>
    </Block>
  }
  _renderGoodsPrice () {
    return <Block
      color={'white'}
      margin={[theme.SIZES.base / 2, 0, 0, 0]}
      padding={[0, theme.SIZES.base]}
    >
      <Block
        row
        center
        space={'between'}
        style={{ height: 44 }}
      >
        <Text caption>商品总价</Text>
        <Block row>
          <Text primary bold>￥</Text>
          <Text primary bold>499</Text>
        </Block>
      </Block>
      <Block
        row
        center
        space={'between'}
        style={{ height: 44 }}
      >
        <Text caption>配送费</Text>
        <Block row>
          <Text primary bold>+</Text>
          <Text primary bold>￥</Text>
          <Text primary bold>0</Text>
        </Block>
      </Block>
      <Block
        row
        center
        space={'between'}
        style={{ height: 44 }}
      >
        <Text caption>商品优惠</Text>
        <Block row>
          <Text primary bold>-</Text>
          <Text primary bold>￥</Text>
          <Text primary bold>119</Text>
        </Block>
      </Block>
    </Block>
  }
  _renderActionArea () {
    return <Block block row space={'between'} style={styles.detail_cart} padding={[0, theme.SIZES.base]}>
      <Block row center>
        <Text header primary bold>￥</Text>
        <Text title primary bold>6488</Text>
      </Block>
      <Block row center padding={[theme.SIZES.base, 0]}>
        <TouchableWithoutFeedback
          style={styles.buy}
          onPress={() => this.props.navigation.navigate('OrderPay')}
        >
          <Text white>提交订单</Text>
        </TouchableWithoutFeedback>
      </Block>
    </Block>
  }
  render () {
    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <Block block style={{ position: 'relative' }}>
        <Header
          status={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => { })}
          title="确认订单"
          style={{ backgroundColor: '#fff' }}
        />
        {this._renderAddress()}
        {this._renderGoodsInfo()}
        {this._renderGoodsPrice()}
        {this._renderActionArea()}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  promotionTip: {
    marginTop: 2,
    marginLeft: theme.SIZES.base / 4,
    paddingHorizontal: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    borderColor: theme.COLORS.primary,
    borderRadius: 50
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
  buy: {
    backgroundColor: '#ca101d',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
})
