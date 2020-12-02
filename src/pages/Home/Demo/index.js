import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Banner from '../Banner'
import MyCarousel from './Carousel'

export default class Recommend extends Component {
  
  
  render() {
        return (
          <View style={styles.recommend_container}>
            {/* <Text>home</Text> */}
            <Slider />
            {/* <MyCarousel /> */}
          </View>
        )
  }
}

const styles = StyleSheet.create({
  recommend_container: {
    flex: 1,
  },
});
