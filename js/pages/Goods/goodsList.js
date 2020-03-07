import React,{Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'

export default class GoodsList extends Component {
  render() {
    return(
      <View style={[styles.base_item,styles.goods_list]}>
        <Image
          style={styles.itemPic}
          source={require('../Home/Demo/item/goods_list.png')}
          resizeMode='contain'
        />
        <View style={styles.goods_list_container}>
          <View style={styles.goods_list_item}>
            <Image
              style={styles.goods_list_img}
              source={require('../Home/Demo/img/5.jpg')}
              resizeMode='cover'
            />
            <View style={styles.goods_info}>
              <Text numberOfLines={2} style={styles.name}>【新连接领专属礼】莱蒂卡森 实木床1.8米双人床北欧软包背靠1.5单人床</Text>
              <Text style={styles.price_wrapper}>￥<Text style={styles.price}>390</Text>.00</Text>
            </View>
          </View>
          <View style={styles.goods_list_item}>
            <Image
              style={styles.goods_list_img}
              source={require('../Demo/img/2.jpg')}
              resizeMode='cover'
            />
            <View style={styles.goods_info}>
              <Text numberOfLines={2} style={styles.name}>【新连接领专属礼】莱蒂卡森 实木床1.8米双人床北欧软包背靠1.5单人床</Text>
              <Text style={styles.price_wrapper}>￥<Text style={styles.price}>390</Text>.00</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  // goods_list
  base_item: {
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  itemPic: {
    width: '100%',
    height: 50,
  },
  goods_list: {
    marginBottom: 20
  },
  goods_list_container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  goods_list_item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10
  },
  goods_list_img: {
    width: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // height: 100,
  },
  goods_info: {
    flexDirection:'column',
    paddingLeft: 5,
    paddingRight: 5,
  },
  name: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5
  },
  price_wrapper: {
    color: 'red',
    paddingLeft: 5
  },
  price: {
    fontSize: 16,
    
  }
})