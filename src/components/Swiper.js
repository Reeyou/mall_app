import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

const ANDROID_STATUBAR_HEIGHT = StatusBar.currentHeight
const { width } = Dimensions.get('window');
const DOT_WIDTH = 8
export default class SwiperComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperShow: false,
      activeDotWidth: 14
    }
  }
  // static propTypes = {
  //   height: PropTypes.object,
  //   swiperList: PropTypes.array
  // };
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        swiperShow: true
      });
    }, 300)
  }
  onScroll (e) {
    // console.log(e)
  }
  onMoment (e, state, context) {
    // console.log(e)
    // console.log(state)
    this.setState({
      activeDotWidth: DOT_WIDTH * (state.index + 1)
    })
  }
  render () {
    const { style, swiperList } = this.props
    return (
      <View style={[styles.container, style]}>
        <Swiper style={styles.wrapper}
          height={100}
          autoplay={true}
          onScrollBeginDrag={this.onScroll.bind(this)}
          onMomentumScrollEnd={this.onMoment.bind(this)}
          dot={<View style={{
            backgroundColor: 'transparent',
            borderColor: 'white',
            borderStyle: 'solid',
            borderWidth: 1,
            width: 6,
            height: 6,
            borderRadius: 6,
            marginLeft: 2,
            marginRight: 2
          }} />}
          activeDot={<View style={{
            backgroundColor: 'white',
            width: 6,
            height: 6,
            borderRadius: 6,
            marginLeft: 2,
            marginRight: 2
          }} />}
          paginationStyle={{
            right: 0,
            bottom: 10,
            marginLeft: 240,
          }}>
          {
            swiperList.map((item, index) => (
              <View key={index} style={styles.slide}>
                <Image
                  style={styles.image}
                  source={item.uri}
                  resizeMode='contain'
                />
              </View>
            ))
          }
        </Swiper>
      </View>
    )
  }
}
const styles = {
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  wrapper: {
    borderRadius: 10,
  },
  slide: {
    backgroundColor: 'transparent'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
}
