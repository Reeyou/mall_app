import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Slider from './slider'
import MyCarousel from './Carousel'

export default class Recommend extends Component {

  render() {
    return (
      // <View style={styles.recommend_container}>
      //   <Text>test</Text>
        <MyCarousel />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  recommend_container: {
    // flex: 1,
  },
});
