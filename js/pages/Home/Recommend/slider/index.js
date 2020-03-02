import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
const styles = {
  wrapper: {
    height: 200,
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height: 200,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height: 200,
  }
}

export default class Slider extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
        source={require('../../../../assets/img/goods/p1.png')}
        style={styles.imgBackground}
      />
      <Swiper style={styles.wrapper}
        dot={<View style={{backgroundColor: 'red', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        activeDot={<View style={{backgroundColor: '#000', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        paginationStyle={{
          top: -260,
          right: -280
        }}
        loop={false}>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../../../assets/img/goods/p2.png')}
            resizeMode='cover'
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../../../assets/img/goods/p3.png')}
            resizeMode='cover'
          />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require('../../../../assets/img/goods/p4.png')} />
        </View>
      </Swiper>
    </View>
    )
  }
}
