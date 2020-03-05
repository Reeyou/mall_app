import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import NavigationBar from '../../component/NavigationBar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CheckBox from 'react-native-check-box'

import { BoxShadow } from 'react-native-shadow'
const SHADOW_WIDTH = Dimensions.get('window').width - 40
const THEME_COLOR = 'white'
export default class ShopCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false,
      isEmpty: false
    }
  }
  getLeftContent() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <Text
        style={styles.title}
      >购物车</Text>
    </TouchableOpacity>
  }
  getRightButton() {
    return <TouchableOpacity
      style={{ flexDirection: 'row' }}
    >
      <AntDesign
        name={'message1'}
        size={26}
        style={{ color: '#000' }}
      />
    </TouchableOpacity>
  }
  _renderEmptyCart() {
    return (
      <View style={styles.emptyCartContianer}>
        <View style={styles.emptyCartHeader}>
          <Text style={styles.emptyCartLogin}>登录</Text>
          <Text style={styles.emptyCartLoginTip}>登录后同步电脑与手机购物车中的商品</Text>
        </View>
        <View style={styles.emptyCartContent}>
          <Image
            style={styles.emptyCartImg}
            source={require('../Home/Demo/img/2.jpg')}
            resizeMode='cover'
          />
          <Text style={styles.emptyCartTip}>购物车是空的</Text>
        </View>
        <View style={styles.emptyCartHandle}>
          <Text style={[styles.btn, styles.btnLeft]}>随便逛逛</Text>
          <Text style={[styles.btn, styles.btnRight]}>查看关注</Text>
        </View>
      </View>
    )
  }
  _renderCartItem() {
    return (
      <View style={styles.cartItemContainer}>
        <View style={styles.cartItemContent}>
          <CheckBox
            style={styles.checkBox}
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
          />
          
          <View style={styles.goods_container}>
            <Image
              style={styles.goods_img}
              source={require('../Home/Demo/img/2.jpg')}
              resizeMode='cover'
            />
            <View style={styles.goods_info}>
              <Text numberOfLines={2} style={styles.goods_name}>华为Mate30Pro全网通手机 丹霞橙(8+256G)</Text>
              <Text style={styles.goods_version}>丹霞橙(8+256G)</Text>
              <View style={styles.goods_buy}>
                <Text style={styles.goods_price}>￥<Text style={styles.goods_price_spec}>6399</Text>.00</Text>
                <View style={styles.handle}>
                  <Text style={styles.handle_reduce}>——</Text>
                  <Text style={styles.goods_count}>1</Text>
                  <Text style={styles.handle_add}>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
  _renderCartFooter() {
    return (
      <View style={styles.cart_footer}>
        <View style={styles.footer_left}>
        <CheckBox
            style={styles.checkBox}
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
          />
          <Text style={styles.total_label}>全选</Text>
        </View>
          <View style={styles.footer_right}>
            <Text style={styles.price_label}>总计：<Text style={styles.total_price}>￥16997</Text></Text>
            <Text style={styles.jiesuan}>结算 (3)</Text>
          </View>
      </View>
    )
  }
  render() {
    let statusBar = {
      backgroundColor: THEME_COLOR,
      barStyle: 'light-content',
      // hidden: true
    }
    let navigationBar = <NavigationBar
      statusBar={statusBar}
      renderLeftContent={this.getLeftContent()}
      renderRightButton={this.getRightButton()}
      style={{ backgroundColor: THEME_COLOR }}
    />
    return (
      <View style={styles.container}>
        {navigationBar}
        {/* {
          this.state.isEmpty ? this._renderEmptyCart()
            : this._renderCartItem()
        } */}
        {/* {this._renderEmptyCart()} */}
        {this._renderCartItem()}
        {this._renderCartItem()}
        {this._renderCartFooter()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10
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
    backgroundColor: THEME_COLOR
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
  cartItemContainer: {
    height: 100,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  cartItemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 40,
    padding: 10,
    alignItems: 'center',
    color: 'red'
  },
  goods_container: {
    flex: 1,
    flexDirection: 'row',

  },
  goods_img: {
    width: 80,
    height: 80
  },
  goods_info: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 20
  },
  goods_name: {
    fontSize: 16,
    color: '#333',
    lineHeight: 18
  },
  goods_version: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
    marginBottom: 4,
  },
  goods_buy: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goods_price: {
    color: 'red',
    fontSize: 12
  },
  goods_price_spec: {
    fontSize: 14
  },
  handle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  handle_reduce: {
    width: 20,
    height: 20,
    textAlign: 'center',
    color: '#ccc',
  },
  handle_add: {
    width: 20,
    height: 20,
    textAlign: 'center',
    color: '#333',
  },
  goods_count: {
    width: 24,
    height: 20,
    lineHeight: 20,
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    backgroundColor: '#ddd',
    color: '#333',
    borderRadius: 2
  },
  //===================//
  emptyCartContianer: {
    flex: 1,
    flexDirection: 'column',
    height: 500
  },
  emptyCartHeader: {
    // height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartLogin: {
    fontSize: 12,
    color: '#aaa',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10
  },
  emptyCartLoginTip: {
    marginLeft: 10,
    fontSize: 12,
    color: '#aaa'
  },
  emptyCartContent: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartImg: {
    width: 60,
    height: 60
  },
  emptyCartTip: {
    fontSize: 16,
    marginLeft: 10
  },
  emptyCartHandle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    fontSize: 14,
    color: '#333',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 20,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
  },
  btnLeft: {
    marginRight: 5,
  },
  btnRight: {
    marginLeft: 5,
    borderColor: 'red',
    color: 'red'
  },

  // cartfooter //
  cart_footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer_left: {
    flexDirection: 'row',
    // justifyContent: 'space-between'    
    alignItems: 'center'
  },
  footer_right: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  total_price: {
    color: '#ca141d',
    fontSize: 16,
    fontWeight: 'bold'
  },
  total_label: {
    color: "#999",
    fontSize: 12
  },
  price_label: {
    color: '#333',
    fontSize: 14
  },
  jiesuan: {
    borderRadius: 20,
    backgroundColor: '#e43e2d',
    marginLeft: 10,
    color: 'white',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12
  }
})