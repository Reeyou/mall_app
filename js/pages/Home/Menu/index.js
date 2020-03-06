import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  StyleSheet,
  ViewPropTypes,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import NavigationUtils from '../../../navigators/NavigationUtils'
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
const DOT_WIDTH = 8
export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperShow: false,
      activeDotWidth: 14
    }
    
  }
  static propTypes = {
    cellStyle: ViewPropTypes.style,
    MenuList: PropTypes.array,
  }
  _renderItem(data) {   
    return <View style={styles.container}>
      {
        data.map((item, index) => (
          <TouchableOpacity
            style={[styles.cell,this.props.cellStyle]}
            onPress={() => NavigationUtils.goPage('GoodsDetail')}>
            <Image
              style={styles.image}
              source={item.menuIcon}
              resizeMode='cover'
            />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        
    
        ))
      }
    </View>
  }
  render() {
    console.log(this.props.cellStyle.width)
    return (
      <View>
        {this._renderItem(this.props.MenuList)}
      </View>
    )
  }
}
const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    paddingBottom: 10
  },
  cell: {
    // width: '20%',
    // width: this.props.cellStyle.width,
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: '#666'
  },
  image: {
    width: 40,
    height: 40,
    marginTop: 12,
  }
}
