import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import styled from "styled-components/native"; // 3.1.6
import Carousel, { Pagination } from 'react-native-snap-carousel'; // 3.6.0

const { width } = Dimensions.get('window');
export default class ThumbnailCarousel extends Component {

  constructor(props){
    super();
    this.state = {
      errors: []
    }
    this.props = props;
    this._carousel = {};
    this.init();
  }

  get pagination () {
    const { videos, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={videos.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}
  init(){
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img14.360buyimg.com/da/s590x470_jfs/t1/92945/12/8280/69639/5e01c33fEf8f9f740/d5807c847133f28f.jpg.webp",
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img14.360buyimg.com/pop/s590x470_jfs/t1/105909/27/13889/76744/5e5cd24bE9985b6a6/98d4016a5926f38e.jpg.webp",
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img10.360buyimg.com/pop/s590x470_jfs/t1/90426/34/13091/99404/5e565237Eb465cc07/bb3f39ef0e0cad5f.jpg.webp",
        },
        {
          id: "sNPnbI1arSE",
          thumbnail: "https://img14.360buyimg.com/pop/s590x470_jfs/t1/105909/27/13889/76744/5e5cd24bE9985b6a6/98d4016a5926f38e.jpg.webp",
        }, 
      ],
      activeSlide: '0'
    };

    console.log("ThumbnailCarousel Props: ", this.props)
  }

   componentDidMount() {
    this._carousel.snapToItem(2);
  }


  handleSnapToItem(index){
    console.log("snapped to ", index)
    this.setState({ activeSlide: index })
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
        <ThumbnailBackgroundView>
          <CurrentVideoTO
             onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToItem(index);
              }}
          >
            <CurrentVideoImage source={{ uri: item.thumbnail }} />
          </CurrentVideoTO>
            {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
        </ThumbnailBackgroundView>
    );
  }

  render = () => {

    console.log("videos: updating")

    return (
      <CarouselBackgroundView>
        <Carousel
          ref={ (c) => { this._carousel = c; } }
          data={this.state.videos}
          renderItem={this._renderItem.bind(this)}
          onSnapToItem={this.handleSnapToItem.bind(this)}
          sliderWidth={width}
          itemWidth={400}
          layout={'default'}
          firstItem={0}
        />
         { this.pagination }
      </CarouselBackgroundView>
    );
  }
}

const CurrentVideoImage = styled.Image`
  width: 500;
  left: 20;
  height: 200;
  border-radius: 10;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 256; 
`;

const CurrentVideoTO = styled.TouchableOpacity`
`
const CarouselBackgroundView = styled.View`
  background-color: white;
  height: 200;
  width: 100%;
`