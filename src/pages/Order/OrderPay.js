import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, SearchBar, Block, Text } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class OrderPay extends Component {
  render() {
    const statusBar = {
      backgroundColor: 'transparent',
      barStyle: 'dark-content',
      translucent: true
    };
    return (
      <Block>
        <Header status={statusBar}
          leftContent={ViewUtil.getLeftBackButton(() => { }, theme.COLORS.black)}
          title="订单支付"
          style={{ backgroundColor: '#fff' }}
        />
      </Block>
    )
  }
}

const styles = StyleSheet.create({})
