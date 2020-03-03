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

export default class GoodsCard extends Component {

  _renderGoodsCard() {
    return (
      <View style={styles.base_item}>
        <Image
          style={styles.itemPic}
          source={require('../Demo/item/item2.png')}
          resizeMode='contain'
        />
        <View style={styles.topContainer}>
          <View style={styles.leftStyle}>
            <Image
              style={styles.leftPic}
              source={require('./Demo/img/2.jpg')}
              resizeMode='cover'
            />
            <Text style={styles.leftLabel}>精致甜美短外套，小资优雅显魔力</Text>
          </View>
          <View style={styles.rightStyle}>
            <View style={styles.labelContainer}>
              <Text style={styles.item_line}></Text>
              <Text style={styles.item_label}>游戏笔电</Text>
              <Text style={styles.item_line}></Text>
            </View>
            <View style={styles.smallPicWrapper}>
              <Image style={styles.smallPic}
                source={require('./Demo/img/2.jpg')}
                resizeMode='cover' />
              <Image style={styles.smallPic}
                source={require('./Demo/img/2.jpg')}
                resizeMode='cover' />
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.b_l_container}>
            <Text style={styles.mainTitle}>酷玩科技</Text>
            <Text style={styles.subTitle}>大疆首款运动相机体验</Text>
            <View style={[styles.smallPicWrapper, styles.b_l_picWrapper]}>
              <Image style={styles.smallPic}
                source={require('./Demo/img/2.jpg')}
                resizeMode='cover' />
              <Image style={styles.smallPic}
                source={require('./Demo/img/2.jpg')}
                resizeMode='cover' />
            </View>
          </View>
          <View style={styles.b_r_container}>
            <View>
              <Text style={styles.mainTitle}>免息星球</Text>
              <Text style={styles.subTitle}>白条免息购</Text>
              <Image style={[styles.smallPic, styles.b_r_smallPic]}
                source={require('./Demo/img/2.jpg')}
                resizeMode='cover' />
            </View>
            <View>
              <Text style={styles.mainTitle}>运动户外</Text>
              <Text style={styles.subTitle}>硬核穿搭</Text>
              <Image style={[styles.smallPic, styles.b_r_smallPic]}
                source={require('./Demo/img/2.jpg')}
                resizeMode='cover' />
            </View>
          </View>
        </View>
      </View>
    )
  }
  render() {
    return(
      <View></View>
    )
  }
}

const styles = StyleSheet.create({
  // baseitem
  base_item: {
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  itemPic: {
    width: '100%',
    height: 50,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  leftStyle: {
    flex: 1,
    marginRight: 2,
  },
  rightStyle: {
    flex: 1,
    marginLeft: 2,
    backgroundColor: 'pink',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  leftPic: {
    width: '100%',
    height: 130,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  leftLabel: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    color: 'white'
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10
  },
  item_line: {
    width: 20,
    height: 2,
    backgroundColor: 'white'
  },
  item_label: {
    textAlign: 'center',
    color: 'white'
  },
  smallPicWrapper: {
    flexDirection: 'row',
    marginTop: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  smallPic: {
    width: 80,
    height: 80,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 6
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  b_r_container: {
    flex: 1,
    marginLeft: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  b_l_container: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 2,
  },
  b_l_picWrapper: {
    paddingLeft: 4,
    marginTop: 4,
    paddingBottom: 10
  },
  mainTitle: {
    marginTop: 5,
    fontSize: 14,
    paddingLeft: 10,
  },
  subTitle: {
    fontSize: 10,
    color: '#aaa',
    paddingLeft: 10,
  },
  b_r_smallPic: {
    marginTop: 4
  },
})