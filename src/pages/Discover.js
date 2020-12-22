import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Header, SearchBar } from '../components';
import Spinner from 'react-native-spinkit'


export default class DiscoverScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      index: 10,
      types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
      size: 80,
      color: "#aaa",
      isVisible: true
    }
  }

  render () {
    var type = this.state.types[this.state.index];
    return (
      this.state.isVisible ?  <View style={styles.container}>
        <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={'Circle'} color={this.state.color} />
        <Text style={[styles.spin_text,{color: this.state.color}]}>正在加载</Text>
      </View> : null
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#d35400',
  },
  spin_text: {
    // color: '#fff',
    fontSize: 13,
  },
  spinner: {
    marginBottom: 10
  },
});
