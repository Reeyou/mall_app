import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, SearchBar, Block, Text } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ViewUtil from '../../utils/ViewUtil';
import { theme } from '../../constants';

export default class OrderPay extends Component {
  state = {
    timer: 19,
    second: 20
  }
  _renderTimer () {
    return <Block center middle color={'#FFFDD8'} style={{ height: 30 }}>
      <Text small black1>{`请您在${this.state.timer}分${this.state.second}秒内完成支付`}</Text>
    </Block>
  }
  _renderOrderInfo () {
    return <Block
      color={'white'}
      padding={[0, theme.SIZES.base]}
    >
      <Block
        row
        center
        space={'between'}
        style={{ height: 44 }}
      >
        <Text caption>付款金额</Text>
        <Block row>
          <Text primary bold>￥</Text>
          <Text primary bold>499</Text>
        </Block>
      </Block>
      <Block
        row
        center
        style={{ height: 24, paddingBottom:10 }}
      >
        <Text small black1>收货信息：</Text>
        <Text small black1>贺军，13925053812</Text>
      </Block>
    </Block>
  }
  _renderPay () {
    return <Block>
      <Text caption black1 style={{ paddingVertical: 10, paddingHorizontal: theme.SIZES.base }}>请选择支付方式</Text>
      <Block color={'white'} padding={[0, theme.SIZES.base]}>
        <Block
          row
          center
          space={'between'}
          style={{ height: 44 }}
        >
          <Block row center>
            <Image
              source={require('../../assets/images/ALIPAY.png')}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
            <Text caption style={{marginLeft: 4}}>支付宝</Text>
          </Block>
          {
            ViewUtil.getRightBackButton(() => { })
          }
        </Block>
        <Block
          row
          center
          space={'between'}
          style={{ height: 44 }}
        >
          <Block row center>
            <Image
              source={require('../../assets/images/WXPAY.png')}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
            <Text caption style={{marginLeft: 4}}>微信</Text>
          </Block>
          {
            ViewUtil.getRightBackButton(() => { })
          }
        </Block>
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
      <Block>
        <Header
          status={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => { })}
          title="订单支付"
          style={{ backgroundColor: '#fff' }}
        />
        {this._renderTimer()}
        { this._renderOrderInfo()}
        { this._renderPay()}
      </Block>
    )
  }
}

const styles = StyleSheet.create({})
