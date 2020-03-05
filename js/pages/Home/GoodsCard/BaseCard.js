import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import { styles } from './goodsStyle'

export default class BaseCard extends Component {
  constructor(props) {
    super(props)
  }
  // {/* 背景single cell */ }
  backgroundSingleCell(style) {
    return (
      <View style={[styles.b_singleCell,style]}>
        <Image
          style={styles.b_singlePic}
          source={require('../Demo/img/3.jpg')}
          resizeMode='cover'
        />
        <Text style={styles.b_singleLabel}>精致甜美短外套，小资优雅显魔力</Text>
      </View>
    )
  }

  // {/* 背景double cell */ }
  backgroundDoubleCell(style) {
    return <View style={[styles.b_doubleCell,style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.item_line}></Text>
        <Text style={styles.item_label}>游戏笔电</Text>
        <Text style={styles.item_line}></Text>
      </View>
      <View style={styles.smallPicWrapper}>
        <Image style={styles.smallPic}
          source={require('../Demo/img/1.jpg')}
          resizeMode='cover' />
        <Image style={styles.smallPic}
          source={require('../Demo/img/2.jpg')}
          resizeMode='cover' />
      </View>
    </View>
  }

  // {/* double cell */ }
  doubleCell(style) {
    return <View style={[styles.doubleCell,style]}>
      <Text style={styles.mainTitle}>酷玩科技</Text>
      <Text style={styles.subTitle}>大疆首款运动相机体验</Text>
      <View style={[styles.smallPicWrapper, styles.b_l_picWrapper]}>
        <Image style={styles.smallPic}
          source={require('../Demo/img/4.jpg')}
          resizeMode='cover' />
        <Image style={styles.smallPic}
          source={require('../Demo/img/5.jpg')}
          resizeMode='cover' />
      </View>
    </View>
  }

  // {/* single cell */ }
  singleCell(style) {
    return <View style={[styles.single_cell,style]}>
      <Text style={styles.mainTitle}>免息星球</Text>
      <Text style={styles.subTitle}>白条免息购</Text>
      <Image style={[styles.smallPic, styles.b_r_smallPic]}
        source={require('../Demo/img/2.jpg')}
        resizeMode='cover' />
    </View>
  }
}

