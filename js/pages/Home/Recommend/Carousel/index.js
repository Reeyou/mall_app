import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const horizontalMargin = 20;
const slideWidth = 280;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
  export default class MyCarousel extends Component {
      constructor(props) {
            super(props);
            this.state = {
                entries: [
                    { title: "安徒生童话" },
                    { title: "格林童话" },
                    { title: "我的童话"}
                ]
            }
       }


    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
 
    render () {
        return (
            <Carousel
              layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={280}
              itemWidth={itemWidth}
            />
        );
    }
}


const styles = StyleSheet.create({ 
    slide: {
      // borderRadius: 10,
      // flex: 1,
      backgroundColor: '#992211'
   }
})