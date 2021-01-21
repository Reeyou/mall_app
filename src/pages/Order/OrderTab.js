import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native'
import { Block, Text } from '../../components';
import { theme } from '../../constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default class OrderTab extends Component {
  constructor(props) {
    super()
    // const { navigation } = props
    // this.state = {
    //   navigation
    // }
  }
  _renderOrderItem () {
    let contentView = <Block color={'white'} card margin={[theme.SIZES.base/2, 0, 0, 0]}>
      <Block row space={'between'} style={styles.borderBottom} padding={[theme.SIZES.base / 2, theme.SIZES.base]}>
        <Block row>
          <Text caption black1>订单编号：</Text>
          <Text caption black1>7582374242</Text>
        </Block>
        <Text caption black1>交易关闭</Text>
      </Block>
      <Block row space={'between'} padding={[theme.SIZES.base]} style={styles.borderBottom}>
        <Image source={require('../../assets/images/3.jpg')} style={{ width: 80, height: 80 }} resizeMode="cover" />
        <Block row block wrap padding={[0,theme.SIZES.base/2]}>
          <Text body>荣耀魔方蓝牙耳机 荣耀魔方蓝牙耳机（树莓红）</Text>
          <Text caption black1>树莓红 单品</Text>
        </Block>
        <Block>
          <Text body black>￥99</Text>
          <Text right caption black1>x1</Text>
        </Block>
      </Block>
      <Block row right padding={[theme.SIZES.base / 2, theme.SIZES.base]}>
        <Text caption>共</Text>
        <Text caption>1</Text>
        <Text caption>件商品，待付：</Text>
        <Text caption bold>￥99</Text>
      </Block>
    </Block>
    return contentView
  }
  render () {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('OrderDetail')}>
          {this._renderOrderItem()}
        </TouchableWithoutFeedback>
        
        {this._renderOrderItem()}
        {this._renderOrderItem()}
        {this._renderOrderItem()}
        {this._renderOrderItem()}
        {this._renderOrderItem()}
        {this._renderOrderItem()}
      </ScrollView>
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
