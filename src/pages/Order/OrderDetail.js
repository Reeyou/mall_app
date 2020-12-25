import React, { Component } from 'react';
import { StyleSheet, Image } from'react-native'
import { Header, Block, Text } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../../constants';

export default class OrderDetail extends Component {
  constructor(props) {
    super()

  }
  _renderOrderDetail () {
    let content = <Block>
      <Block color={'white'} padding={[theme.SIZES.base]}>
        <Text h1>交易关闭</Text>
        <Text caption black1 style={{marginTop: theme.SIZES.base}}>2020-12-25 15:12:34</Text>
      </Block>
      <Block row color={'white'} margin={[theme.SIZES.base/2,0,0,0]} padding={[ theme.SIZES.base]}>
        <Ionicons
          name={'location-outline'}
          size={theme.SIZES.base*1.5}
          style={{ color: theme.COLORS.black , alignItems: 'baseline', fontWeight: 'bold'}}
        />
        <Block margin={[0,0,0,theme.SIZES.base/2]}>
          <Block row>
            <Text bold height={18}>Reeyou</Text>
            <Text bold height={18} style={{marginLeft: theme.SIZES.base}}>13945675678</Text>
          </Block>
          <Block margin={[theme.SIZES.base/3,0,0,0]}>
            <Text caption>广东省广州市天河区 珠江新城</Text>
          </Block>
        </Block>
      </Block>
      <Block margin={[theme.SIZES.base/2,0,0,0]} color={'white'}>
        <Block row space={'between'} padding={[theme.SIZES.base]}>
          <Image source={require('../../assets/images/3.jpg')} style={{ width: 80, height: 80 }} resizeMode="cover" />
          <Block row block wrap padding={[0, theme.SIZES.base / 2]}>
            <Text body>荣耀魔方蓝牙耳机 荣耀魔方蓝牙耳机（树莓红）</Text>
            <Text caption black1>树莓红 单品</Text>
          </Block>
          <Block>
            <Text body black>￥99</Text>
            <Text right caption black1>x1</Text>
          </Block>
        </Block>
      </Block>
      <Block margin={[theme.SIZES.base/2,0,0,0]} color={'white'}>
        <Block padding={[theme.SIZES.base]} row>
          <Text caption>订单编号：</Text>
          <Text caption black1>1441234654</Text>
        </Block>
        <Block padding={[0,theme.SIZES.base,theme.SIZES.base]} row>
          <Text caption>下单时间：</Text>
          <Text caption black1>2020-12-25 15:12:34</Text>
        </Block>
      </Block>
      <Block margin={[theme.SIZES.base/2,0,0,0]} color={'white'}>
        <Block row space={'between'}  padding={[theme.SIZES.base]} style={styles.borderBottom}>
          <Text body>商品总价</Text>
          <Text body bold>￥6488</Text>
        </Block>
        <Block row right center padding={[theme.SIZES.base]}>
          <Text body>支付总额：</Text>
          <Text color={theme.COLORS.primary} bold h3>￥6488</Text>
        </Block>
      </Block>
    </Block>

    return content
  }
  render () {
    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'dark-content',
      translucent: true
    };

    return (
      <Block block>
        <Header
          title={"订单详情"}
          style={{ backgroundColor: '#fff' }}
          statusBar={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => _utils.goBack(this.props.navigation), theme.COLORS.black)}
        />
        <Block block>
          {this._renderOrderDetail()}
        </Block>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  borderBottom: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: theme.COLORS.gray2,
    borderStyle: 'solid'
  }
})
