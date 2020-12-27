
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Header, Block, Text, CheckBox, Button } from '../components'
import { theme } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


export default class ShopCart extends Component {
  state = {
    isEdit: false
  }
  _renderGoodsItem () {
    let content = <TouchableWithoutFeedback>
      <Block
        color={'white'}
        card
        row
        center
        margin={[theme.SIZES.base / 2, theme.SIZES.base / 2, 0, theme.SIZES.base / 2]}
        padding={[theme.SIZES.base]}
      >
        <CheckBox isCheck={true}/>
        <Image source={require('../assets/images/4.jpg')} style={{ width: 80, height: 80, marginHorizontal: 10 }} resizeMode="cover" />
        <Block column block wrap>
          <Block column>
            <Text body>荣耀魔方蓝牙耳机 荣耀魔方蓝牙耳机（树莓红）</Text>
            <Text caption black1>树莓红 单品</Text>
          </Block>
          <Block row padding={[theme.SIZES.base,0,0,0]}>
            <Text bold h3 color={theme.COLORS.primary}>￥99</Text>
            <Block block row right center>
              <TouchableWithoutFeedback>
                <Ionicons name={'remove-circle-outline'} size={theme.SIZES.base * 1.5} style={{ color: theme.COLORS.black2 }} />
              </TouchableWithoutFeedback>
              <Text center color={theme.COLORS.black} style={{ width: theme.SIZES.base }}>1</Text>
              <TouchableWithoutFeedback>
                <Ionicons name={'add-circle-outline'} size={theme.SIZES.base * 1.5} style={{ color: theme.COLORS.black1 }} />
              </TouchableWithoutFeedback>
            </Block>
          </Block>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
    return content
  }
  render () {
    const statusBar = {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
      translucent: true
    };
    const { isEdit } = this.state
    return (
      <Block block>
        <Header
          style={{ backgroundColor: '#fff' }}
          statusBar={statusBar}
          leftContent={
            <Block>
              <Text h3 bold>购物车</Text>
            </Block>
          }
          rightContent={
            <TouchableWithoutFeedback
              onPress={() => this.setState({ isEdit: !isEdit })}
            >
              <Text body gray>{isEdit ? '完成' : '编辑'}</Text>
            </TouchableWithoutFeedback>
          }
        />
        <ScrollView
          contentContainerStyle={{ paddingBottom: theme.SIZES.base / 2 }}
          showsVerticalScrollIndicator={false}
        >
          {this._renderGoodsItem()}
          {this._renderGoodsItem()}
          {this._renderGoodsItem()}
          {this._renderGoodsItem()}
          {this._renderGoodsItem()}
          {this._renderGoodsItem()}
          {this._renderGoodsItem()}
        </ScrollView>
        <Block row center color={'white'} padding={[0, theme.SIZES.base]}>
          <Block row>
            <CheckBox isCheck={false} />
            <Text body color={theme.COLORS.black1} style={{ marginLeft: theme.SIZES.base / 2 }}>全选</Text>
          </Block>
          <Block row center right block>
            {isEdit ? null : <Text>总计：</Text>}
            {isEdit ? null : <Text bold h3 color={theme.COLORS.primary}>￥0</Text>}
            {
              isEdit
                ? <Button
                  style={[
                    styles.cart_button,
                    { borderColor: theme.COLORS.gray, borderWidth: 1 }
                  ]}>
                  <Text style={styles.cart_button_text} gray>删除</Text>
                </Button>
                :
                <Button gradient style={styles.cart_button}>
                  <Text style={styles.cart_button_text} white>结算(0)</Text>
                </Button>
            }
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  cart_button: {
    marginLeft: theme.SIZES.base / 2,
    borderRadius: 20,
    height: theme.SIZES.base * 2.3,
  },
  cart_button_text: {
    paddingHorizontal: theme.SIZES.base * 1.5
  }
})
