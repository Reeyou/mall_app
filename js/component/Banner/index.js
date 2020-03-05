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
const DOT_WIDTH = 8
export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperShow: false,
      activeDotWidth: 14
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swiperShow: true
      });
    }, 300)
  }
  onScroll(e) {
    // console.log(e)
  }
  onMoment(e, state, context) {
    // console.log(e)
    // console.log(state)
    this.setState({
      activeDotWidth: DOT_WIDTH * (state.index + 1)
    })
  }
  render() {
    const {style,bannerList} = this.props
    return (
      <View style={[styles.container, style]}>
        <Swiper style={styles.wrapper}
          height={150}
          autoplay={true}
          onScrollBeginDrag={this.onScroll.bind(this)}
          onMomentumScrollEnd={this.onMoment.bind(this)}
          dot={<View style={{
            backgroundColor: 'white',
            width: 8,
            height: 4,
            borderRadius: 8,
            marginLeft: 2,
            marginRight: 2
          }} />}
          activeDot={<View style={{
            backgroundColor: 'white',
            width: 14,
            height: 4,
            borderRadius: 8,
            marginLeft: 2,
            marginRight: 2
          }} />}
          paginationStyle={{
            bottom: 10,
          }}>
          {
            bannerList.map((item, index) => (
              <View style={styles.slide}>
                <Image
                  style={styles.image}
                  source={item.bannerImg}
                  resizeMode='cover'
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
    height: 180,

  },
  wrapper: {
    wdith: '100%',
    height: 180,
  },
  slide: {
    backgroundColor: 'transparent'
  },
  image: {
    width,
    height: 180,
  }
}
