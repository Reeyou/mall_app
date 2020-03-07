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
              source={require('../Home/Demo/img/2.jpg')}
              resizeMode='cover'
            />
            <View style={styles.goods_info}>
              <Text numberOfLines={2} style={styles.name}>【新连接领专属礼】莱蒂卡森 实木床1.8米双人床北欧软包背靠1.5单人床</Text>
              <Text style={styles.price_wrapper}>￥<Text style={styles.price}>390</Text>.00</Text>
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
    flexDirection: 'column',
    marginVertical: 10
  },
  goods_list_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  },
  goods_list_img: {
    width: 160,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  goods_info: {
    flex: 1,
    flexDirection:'column',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5,
  },
  name: {
    width: '100%',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  price_wrapper: {
    color: 'red',
    paddingLeft: 5
  },
  price: {
    fontSize: 16,
    
  }
})