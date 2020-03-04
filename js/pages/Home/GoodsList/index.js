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
      <View style={[styles.base_item,styles.recommend]}>
        <Image
          style={styles.itemPic}
          source={require('../Demo/item/item2.png')}
          resizeMode='contain'
        />
        <View style={styles.recommend_container}>
          <View style={styles.recommend_item}>
            <Image
              style={styles.recommend_img}
              source={require('../Demo/img/5.jpg')}
              resizeMode='cover'
            />
            <Text numberOfLines={2} style={styles.name}>【新连接领专属礼】莱蒂卡森 实木床1.8米双人床北欧软包背靠1.5单人床</Text>
            <Text style={styles.price_wrapper}>￥<Text style={styles.price}>390</Text>.00</Text>
          </View>
          <View style={styles.recommend_item}>
            <Image
              style={styles.recommend_img}
              source={require('../Demo/img/2.jpg')}
              resizeMode='cover'
            />
            <Text numberOfLines={2} style={styles.name}>【新连接领专属礼】莱蒂卡森 实木床1.8米双人床北欧软包背靠1.5单人床</Text>
            <Text style={styles.price_wrapper}>￥<Text style={styles.price}>390</Text>.00</Text>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  // recommend
  base_item: {
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  itemPic: {
    width: '100%',
    height: 50,
  },
  recommend: {
    marginBottom: 20
  },
  recommend_container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  recommend_item: {
    width: '49.5%',
    backgroundColor: 'white',
    borderRadius: 10
  },
  recommend_img: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // height: 100,
  },
  name: {
    fontSize: 14,
    paddingLeft: 5,
    paddingRight: 5,
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